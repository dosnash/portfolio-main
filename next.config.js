module.exports = {
  reactStrictMode: true,
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // This line is crucial for static export
  images: {
    unoptimized: true, // Often needed for static exports as built-in image optimization might not work without a server
  },
};
module.exports = nextConfig;