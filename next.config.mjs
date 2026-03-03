/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static export — works perfectly on Vercel
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
