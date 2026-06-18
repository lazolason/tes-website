/**
 * One-off favicon generator.
 *
 * Source: public/logonew.png (600x600, square, on-brand).
 * Output: public/apple-touch-icon.png (180x180)
 *         public/favicon.ico         (16/32/48 multi-size)
 *
 * Uses the project's existing `sharp` dependency — no new deps.
 * ICO format: one directory header + N image entries, each a PNG-encoded bitmap
 * (PNG-in-ICO), which all modern browsers support.
 */
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const SOURCE = join(projectRoot, 'public', 'logonew.png');
const PUBLIC = join(projectRoot, 'public');

const ICO_SIZES = [16, 32, 48];
const APPLE_SIZE = 180;

/**
 * Build a multi-image .ico from an array of PNG buffers.
 * Reference: https://en.wikipedia.org/wiki/ICO_(file_format)
 */
function buildIco(pngBuffers) {
  const count = pngBuffers.length;
  // 6-byte header + 16 bytes per directory entry
  const headerSize = 6 + 16 * count;
  const totalSize =
    headerSize + pngBuffers.reduce((sum, buf) => sum + buf.length, 0);

  const ico = Buffer.alloc(totalSize);
  let offset = 0;

  // ICONDIR header
  ico.writeUInt16LE(0, offset); offset += 2;       // reserved (0)
  ico.writeUInt16LE(1, offset); offset += 2;       // type (1 = icon)
  ico.writeUInt16LE(count, offset); offset += 2;   // image count

  let imageOffset = headerSize;

  // ICONDIRENTRY for each size
  for (let i = 0; i < count; i++) {
    const buf = pngBuffers[i];
    const size = ICO_SIZES[i];
    // width/height: 0 means 256, otherwise literal pixel count
    ico.writeUInt8(size >= 256 ? 0 : size, offset); offset += 1;   // width
    ico.writeUInt8(size >= 256 ? 0 : size, offset); offset += 1;   // height
    ico.writeUInt8(0, offset); offset += 1;                          // palette (0 = no palette)
    ico.writeUInt8(0, offset); offset += 1;                          // reserved
    ico.writeUInt16LE(1, offset); offset += 2;                       // color planes
    ico.writeUInt16LE(32, offset); offset += 2;                      // bits per pixel
    ico.writeUInt32LE(buf.length, offset); offset += 4;             // image byte size
    ico.writeUInt32LE(imageOffset, offset); offset += 4;            // image offset
    imageOffset += buf.length;
  }

  // Append the raw PNG bytes for each size
  for (const buf of pngBuffers) {
    buf.copy(ico, offset);
    offset += buf.length;
  }

  return ico;
}

async function main() {
  const sourceBuf = await readFile(SOURCE);

  // apple-touch-icon.png — 180x180, opaque white background for iOS
  // (Apple rounds corners; transparent favicons render as black on iOS home screen)
  const appleIcon = await sharp(sourceBuf)
    .resize(APPLE_SIZE, APPLE_SIZE, { fit: 'contain', background: '#ffffff' })
    .flatten({ background: '#ffffff' })
    .png()
    .toBuffer();
  await writeFile(join(PUBLIC, 'apple-touch-icon.png'), appleIcon);
  console.log(`✓ apple-touch-icon.png (${APPLE_SIZE}x${APPLE_SIZE})`);

  // favicon.ico — multi-size PNG-in-ICO
  const icoPngs = await Promise.all(
    ICO_SIZES.map((size) =>
      sharp(sourceBuf)
        .resize(size, size, { fit: 'contain', background: '#ffffff' })
        .flatten({ background: '#ffffff' })
        .png()
        .toBuffer()
    )
  );
  const ico = buildIco(icoPngs);
  await writeFile(join(PUBLIC, 'favicon.ico'), ico);
  console.log(`✓ favicon.ico (${ICO_SIZES.join('/')} sizes, ${ico.length} bytes)`);
}

main().catch((err) => {
  console.error('Favicon generation failed:', err);
  process.exit(1);
});
