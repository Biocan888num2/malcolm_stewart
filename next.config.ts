
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;


// CLEAR OLD SHIT OUT
// **********************
// delete browsing history
// **********************
// Remove-Item -Recurse -Force .next
// Remove-Item -Recurse -Force node_modules
// Remove-Item -Recurse -Force dist
// Remove-Item -Recurse -Force out


// FIRST dependency & build check
// 1. 'npm install'
// 2. 'npm run build'

// Development environment command
// 1. 'npm run dev'

// Production server commands
//1. 'npm install -g serve'
//2. 'serve -s dist'

// Making changes to Git
// 1. 'git status'
// 2. 'git add .'
// 3. 'git commit -m "Explain what you updated"'
// 4. 'git push'