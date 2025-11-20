/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  images: {
    domains: ['github.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [160, 240, 320, 420, 640],
  },
};

module.exports = nextConfig;