/** @type {import('next').NextConfig} */
const nextConfig = {
  // for random pictures in students page
  images: {
    remotePatterns: [{ hostname: 'images.pexels.com' }],
  },
}

export default nextConfig
