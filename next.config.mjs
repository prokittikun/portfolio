/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //allowing images from all domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  }
};

export default nextConfig;
