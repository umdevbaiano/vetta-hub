import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // static export — works perfectly on Vercel
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
