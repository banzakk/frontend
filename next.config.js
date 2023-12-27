/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  // output: 'export',
  assetPrefix: '.',
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
