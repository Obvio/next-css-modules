/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
      cssChunking: 'strict',
      disableOptimizedLoading: true,
      useLightningcss: true,
      useEarlyImport: false
    },
};

export default nextConfig;
