/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output the static files to somewhere more obvious
  distDir: "build",
  experimental: {
    // This is experimental but can
    // be enabled to allow parallel threads
    // with nextjs automatic static generation
    workerThreads: false,
    cpus: 4,
  },
};

module.exports = nextConfig;
