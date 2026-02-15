#!/usr/bin/env node
/**
 * Image Optimization Script
 * Compresses PNG/JPG images in the public directory using sharp
 * Run with: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const TARGET_SIZES = {
  // Large images should be < 300KB
  large: { maxWidth: 1920, quality: 85 },
  // Medium images should be < 200KB
  medium: { maxWidth: 1200, quality: 80 },
  // Logos should be < 100KB
  logo: { maxWidth: 600, quality: 90 },
};

async function optimizeImage(filePath, config) {
  const ext = path.extname(filePath).toLowerCase();
  const fileName = path.basename(filePath);

  if (!['.png', '.jpg', '.jpeg'].includes(ext)) {
    return;
  }

  const stats = fs.statSync(filePath);
  const sizeMB = (stats.size / 1024 / 1024).toFixed(2);

  console.log(`📸 Processing: ${fileName} (${sizeMB}MB)`);

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Resize if needed
    if (metadata.width > config.maxWidth) {
      image.resize(config.maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside',
      });
    }

    // Convert PNG to WebP for better compression
    if (ext === '.png' && !fileName.includes('logo')) {
      const webpPath = filePath.replace(/\.png$/, '.webp');
      await image
        .webp({ quality: config.quality, effort: 6 })
        .toFile(webpPath);

      const webpStats = fs.statSync(webpPath);
      const webpSizeMB = (webpStats.size / 1024 / 1024).toFixed(2);
      console.log(`  ✅ Created WebP: ${path.basename(webpPath)} (${webpSizeMB}MB)`);
    }

    // Optimize original format
    const outputPath = filePath.replace(/\.(png|jpg|jpeg)$/, '.optimized$&');

    if (ext === '.png') {
      await image.png({ quality: config.quality, compressionLevel: 9 }).toFile(outputPath);
    } else {
      await image.jpeg({ quality: config.quality, mozjpeg: true }).toFile(outputPath);
    }

    const optimizedStats = fs.statSync(outputPath);
    const optimizedSizeMB = (optimizedStats.size / 1024 / 1024).toFixed(2);
    const savings = ((1 - optimizedStats.size / stats.size) * 100).toFixed(1);

    console.log(`  ✅ Optimized: ${optimizedSizeMB}MB (${savings}% smaller)`);

    // Replace original with optimized version
    fs.renameSync(outputPath, filePath);

  } catch (error) {
    console.error(`  ❌ Error processing ${fileName}:`, error.message);
  }
}

async function optimizeDirectory() {
  const files = fs.readdirSync(PUBLIC_DIR);

  console.log('🚀 Starting image optimization...\n');

  for (const file of files) {
    const filePath = path.join(PUBLIC_DIR, file);

    if (!fs.statSync(filePath).isFile()) continue;

    // Determine config based on file name
    let config = TARGET_SIZES.large;
    if (file.toLowerCase().includes('logo')) {
      config = TARGET_SIZES.logo;
    } else if (file.match(/vertical|thumb|avatar/i)) {
      config = TARGET_SIZES.medium;
    }

    await optimizeImage(filePath, config);
  }

  console.log('\n✨ Image optimization complete!');
}

optimizeDirectory().catch(console.error);
