import fs from "fs";
import path from "path";

const folder = "./src/data/images/raw";   // your raw photos folder
const outputFile = "./src/data/images/images.ts";  // final Base64 map

// Read all files in raw folder
const files = fs.readdirSync(folder);

const output = {};

files.forEach((file) => {
  const filePath = path.join(folder, file);
  const ext = path.extname(file).toLowerCase();
  const key = path.basename(file, ext).replace(/[^a-zA-Z0-9_]/g, "_");

  // Determine MIME type
  const mime =
    ext === ".png"
      ? "image/png"
      : ext === ".jpg" || ext === ".jpeg"
      ? "image/jpeg"
      : null;

  if (!mime) return;

  // Convert to Base64
  const base64 = fs.readFileSync(filePath).toString("base64");
  output[key] = `data:${mime};base64,${base64}`;
});

// Write the final IMAGES map
fs.writeFileSync(
  outputFile,
  "export const IMAGES = " + JSON.stringify(output, null, 2) + ";\n"
);

console.log("✔ Images converted → src/data/images/images.ts");
