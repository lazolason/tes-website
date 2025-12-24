# AI Rules

## Git Provenance Rule
When referencing commits or claiming "introduced in commit X", you must prove it using:
- `git show <hash> -- <file>`
- `git log -S "<string>" -- <file>`
Do not infer or guess commit provenance.
