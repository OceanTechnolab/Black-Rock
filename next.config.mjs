// filepath: /D:/Code/Black-Rock/next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000/'),
  // Ensure trailingSlash is set to true for static export
  trailingSlash: true,
  assetPrefix: process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000/',
  basePath: '',
  images: {
      unoptimized: true,
  },
  // ...existing code...
};

export default nextConfig;