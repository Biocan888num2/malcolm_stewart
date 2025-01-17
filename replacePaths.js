const fs = require('fs');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/malcolm_stewart' : '';

const replacePlaceholders = (filePath) => {
  let fileContent = fs.readFileSync(filePath, 'utf-8');
  fileContent = fileContent.replace(/__BASE_PATH__/g, basePath);
  fs.writeFileSync(filePath, fileContent, 'utf-8');
  console.log(`Base path replaced in: ${filePath}`);
};

// Define paths to your CSS and JS/TS files
const cssFilePath = path.join(__dirname, 'src', 'app', 'globals.css');
const tsxFilePath = path.join(__dirname, 'src', 'app', 'mysql', 'page.tsx');

// Replace placeholders in the specified files
replacePlaceholders(cssFilePath);
replacePlaceholders(tsxFilePath);
