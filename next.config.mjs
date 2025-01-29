/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEB_URL || 'https://blackrockporcelain.com/'),
  // Ensure trailingSlash is set to true for static export
  trailingSlash: true,
  assetPrefix: process.env.NEXT_PUBLIC_WEB_URL || 'https://blackrockporcelain.com/',
  basePath: '',
  // ...existing code...
};

export default nextConfig;

// Add the following line to your .env file
// NEXT_PUBLIC_WEB_URL=https://blackrockporcelain.com
