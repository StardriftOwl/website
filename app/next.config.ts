/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Ensure compatibility with GitHub Pages' path structure
  basePath: process.env.NODE_ENV === 'production' ? '/website' : '',
  images: {
    unoptimized: true,
  },
  // Disable trailing slash to prevent redirects that GitHub Pages can't handle
  trailingSlash: false,
}

module.exports = nextConfig