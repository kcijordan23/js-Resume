/** @type {import('next').NextConfig} */

// The site is published as plain static files (GitHub Pages).
// On GitHub Pages it lives under /js-Resume, so the build sets BASE_PATH="/js-Resume".
// With a custom domain (e.g. fluidsenses.com) the site sits at the root: set BASE_PATH to "".
const basePath = process.env.BASE_PATH || ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath,
  images: {
    // GitHub Pages can't resize images on the fly, so images are served as-is
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

module.exports = nextConfig
