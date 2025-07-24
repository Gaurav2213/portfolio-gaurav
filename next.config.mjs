/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // Optional: disables Image Optimization
  basePath: '/portfolio-gaurav', // Replace with your actual repo name
  trailingSlash: true,
};

export default nextConfig;
