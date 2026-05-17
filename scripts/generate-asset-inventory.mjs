import { createHash } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");
const docsDir = path.join(rootDir, "docs");
const outputPath = path.join(docsDir, "asset-inventory.md");

function formatBytes(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function collectFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath)));
      continue;
    }

    files.push(fullPath);
  }

  return files;
}

const assets = (await collectFiles(publicDir))
  .map((filePath) => path.relative(publicDir, filePath))
  .sort((left, right) => left.localeCompare(right));

const assetRows = await Promise.all(
  assets.map(async (relativePath) => {
    const absolutePath = path.join(publicDir, relativePath);
    const fileBuffer = await fs.readFile(absolutePath);
    const stats = await fs.stat(absolutePath);
    const hash = createHash("sha256").update(fileBuffer).digest("hex");
    const segments = relativePath.split(path.sep);

    return {
      relativePath: relativePath.replaceAll(path.sep, "/"),
      size: stats.size,
      extension: path.extname(relativePath).slice(1) || "none",
      category: segments.length === 1 ? "root" : segments[0],
      hash,
    };
  }),
);

const totalBytes = assetRows.reduce((sum, row) => sum + row.size, 0);
const byType = [...assetRows].reduce((map, row) => {
  map.set(row.extension, (map.get(row.extension) || 0) + 1);
  return map;
}, new Map());
const byCategory = [...assetRows].reduce((map, row) => {
  map.set(row.category, (map.get(row.category) || 0) + 1);
  return map;
}, new Map());
const exactDuplicates = [...assetRows].reduce((map, row) => {
  const rows = map.get(row.hash) || [];
  rows.push(row.relativePath);
  map.set(row.hash, rows);
  return map;
}, new Map());

const duplicateRows = [...exactDuplicates.values()].filter(
  (paths) => paths.length > 1,
);

const markdown = `# Asset Inventory

Generated: ${new Date().toISOString().slice(0, 10)}

## Summary

- Total assets: ${assetRows.length}
- Total size: ${formatBytes(totalBytes)}

## Counts by Type

| Type | Count |
| --- | ---: |
${[...byType.entries()]
  .sort((left, right) => left[0].localeCompare(right[0]))
  .map(([extension, count]) => `| \`${extension}\` | ${count} |`)
  .join("\n")}

## Counts by Category

| Category | Count |
| --- | ---: |
${[...byCategory.entries()]
  .sort((left, right) => left[0].localeCompare(right[0]))
  .map(([category, count]) => `| \`${category}\` | ${count} |`)
  .join("\n")}

## Assets

| Asset | Type | Size | Category |
| --- | --- | ---: | --- |
${assetRows
  .map(
    (row) =>
      `| \`/${row.relativePath}\` | \`${row.extension}\` | ${formatBytes(row.size)} | \`${row.category}\` |`,
  )
  .join("\n")}

## Exact Duplicate Files

${
  duplicateRows.length === 0
    ? "No exact duplicate files detected."
    : duplicateRows
        .map((paths) => paths.map((asset) => `- \`/${asset}\``).join("\n"))
        .join("\n\n")
}
`;

await fs.mkdir(docsDir, { recursive: true });
await fs.writeFile(outputPath, markdown);

console.log(`Wrote asset inventory to ${path.relative(rootDir, outputPath)}`);
