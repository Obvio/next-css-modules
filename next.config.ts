/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
      cssChunking: 'strict',
      optimizeCss: true,
      disableOptimizedLoading: true,
      useLightningcss: true,
      useEarlyImport: false
    },
};

export default nextConfig;
