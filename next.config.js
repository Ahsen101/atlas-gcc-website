/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Emit /path/index.html so Cloudflare Pages serves /path and /path/ alike.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};
module.exports = nextConfig;
