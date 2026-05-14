const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const imageDir = path.join(__dirname, "../public/AM");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff"]);

async function normalizeImage(filePath) {
  const tempPath = `${filePath}.tmp`;
  await sharp(filePath).rotate().toFile(tempPath);
  await fs.promises.rename(tempPath, filePath);
}

async function processDirectory(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
      continue;
    }

    if (!supportedExtensions.has(path.extname(entry.name).toLowerCase())) {
      continue;
    }

    try {
      console.log(`Normalizing orientation for ${entry.name}`);
      await normalizeImage(fullPath);
    } catch (error) {
      console.error(`Failed to normalize ${entry.name}:`, error);
    }
  }
}

(async () => {
  if (!fs.existsSync(imageDir)) {
    console.error(`Image directory not found: ${imageDir}`);
    process.exit(1);
  }

  await processDirectory(imageDir);
  console.log("Image orientation normalization complete.");
})();
