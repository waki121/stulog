import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    cssChunking: true,
    optimizePackageImports: [
      '@mantine/core',
      '@mantine/hooks',
      '@tabler/icons-react',
    ],
    useLightningcss: true,
  },
};

export default nextConfig;
