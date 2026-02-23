# juancaicedo.com DNS Management

DNS is managed through Vercel. Use the Vercel CLI to query and update records.

## Common Commands

### List all DNS records

```bash
vercel dns ls juancaicedo.com
```

### Add a record

```bash
vercel dns add juancaicedo.com '' MX 'smtp.google.com.' 1
vercel dns add juancaicedo.com '' TXT 'v=spf1 include:_spf.google.com ~all'
vercel dns add juancaicedo.com subdomain CNAME 'target.example.com'
```

### Remove a record by ID

```bash
vercel dns rm <record-id>
```

## Backups

DNS snapshots are stored as JSON files in this directory:

- `juancaicedo.com-dns-backup-2026-02-22.json` - Pre-Google-Workspace migration
