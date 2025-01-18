
import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === 'production';
// isProd ? : ''

const nextConfig: NextConfig = {
  basePath: '/malcolm_stewart',
  assetPrefix: '/malcolm_stewart',
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: '/malcolm_stewart/',
  },
  /* config options here */
};

export default nextConfig;


// CLEAR OLD SHIT OUT
// **********************
// CTRL + C in terminal to stop server
// delete internet browsing history
// **********************
// Remove-Item -Recurse -Force .next
// Remove-Item -Recurse -Force node_modules
// Remove-Item -Recurse -Force dist
// Remove-Item -Recurse -Force out


// FIRST dependency & build check
// 1. 'npm install'
// 2. 'npm run build'
// OR
// 'set NODE_ENV=production
// npm run build'


// Development environment command
// 1. 'npm run dev' 
// OR 
// 'set NODE_ENV=development
// npm run dev'

// Production server commands
//1. 'npm install -g serve'
//2. 'serve -s dist OR npx serve@latest out'

// Making changes to Git
// 1. 'git status'
// 2. 'git add .'
// 3. 'git commit -m "Explain what you updated"'
// 4. 'git push'