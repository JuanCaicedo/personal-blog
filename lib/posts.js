import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

function fixDate(date) {
  return String(date || '').replace('Feburary', 'February')
}

function postFileNames() {
  return fs.readdirSync(postsDirectory).filter((filename) => filename.endsWith('.mdx'))
}

function readPost(filename) {
  const fullPath = path.join(postsDirectory, filename)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const slug = data.slug || filename.replace(/\.mdx$/, '')

  return {
    title: data.title || slug,
    slug,
    date: data.date || '',
    content,
  }
}

export function getAllPosts() {
  return postFileNames()
    .map(readPost)
    .sort((a, b) => Date.parse(fixDate(b.date)) - Date.parse(fixDate(a.date)))
}

export function getPostSlugs() {
  return getAllPosts().map((post) => post.slug)
}

export function getPostBySlug(slug) {
  return getAllPosts().find((post) => post.slug === slug) || null
}
