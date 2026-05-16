import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const gardenDirectory = path.join(process.cwd(), 'garden')

export function resolveWikiSlug(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function displayTitleFromSlug(slug) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function noteFileNames() {
  return fs
    .readdirSync(gardenDirectory)
    .filter((filename) => /\.(md|mdx)$/.test(filename))
}

function getAliases(frontmatter) {
  const aliases = []
  if (Array.isArray(frontmatter.aliases)) aliases.push(...frontmatter.aliases)
  if (Array.isArray(frontmatter.alias)) aliases.push(...frontmatter.alias)
  if (typeof frontmatter.alias === 'string') aliases.push(frontmatter.alias)
  return aliases
}

function parseWikiLink(rawLink) {
  const [target, label] = String(rawLink).split(':')
  return {
    target: target.trim(),
    label: (label || target).trim(),
  }
}

function extractWikiLinks(content) {
  const links = []
  const wikiLinkPattern = /\[\[([^\]]+)\]\]/g
  let match

  while ((match = wikiLinkPattern.exec(content)) !== null) {
    links.push(parseWikiLink(match[1]))
  }

  return links
}

export function getAllNotes() {
  return noteFileNames().map((filename) => {
    const filePath = path.join(gardenDirectory, filename)
    const raw = fs.readFileSync(filePath, 'utf8')
    const { data: frontmatter, content } = matter(raw)
    const slug = resolveWikiSlug(filename.replace(/\.(md|mdx)$/, ''))
    const title = frontmatter.title || displayTitleFromSlug(slug)

    return {
      slug,
      title,
      aliases: getAliases(frontmatter),
      content,
      frontmatter,
      outboundLinks: extractWikiLinks(content),
    }
  })
}

function buildLookup(notes) {
  const lookup = new Map()

  for (const note of notes) {
    const candidates = [note.slug, note.title, ...note.aliases]
    for (const candidate of candidates) {
      lookup.set(resolveWikiSlug(candidate), note.slug)
    }
  }

  return lookup
}

function resolveTargetSlug(target, lookup) {
  const normalized = resolveWikiSlug(target)
  return lookup.get(normalized) || normalized
}

function processWikiLinks(content, lookup) {
  return content.replace(/\[\[([^\]]+)\]\]/g, (match, rawLink) => {
    const { target, label } = parseWikiLink(rawLink)
    const slug = resolveTargetSlug(target, lookup)
    return `[${label}](/garden/${slug})`
  })
}

function buildBacklinkMap(notes, lookup) {
  const backlinkMap = new Map()

  for (const note of notes) {
    for (const link of note.outboundLinks) {
      const targetSlug = resolveTargetSlug(link.target, lookup)
      const backlinks = backlinkMap.get(targetSlug) || []
      backlinks.push({ title: note.title, slug: note.slug })
      backlinkMap.set(targetSlug, backlinks)
    }
  }

  return backlinkMap
}

export function getNoteSlugs() {
  return getAllNotes().map((note) => note.slug)
}

export function getNoteBySlug(slug) {
  const notes = getAllNotes()
  const lookup = buildLookup(notes)
  const backlinks = buildBacklinkMap(notes, lookup)
  const note = notes.find((candidate) => candidate.slug === slug)

  if (!note) return null

  return {
    ...note,
    content: processWikiLinks(note.content, lookup),
    backlinks: backlinks.get(slug) || [],
  }
}
