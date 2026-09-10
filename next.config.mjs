/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // One canonical host: send www traffic to the apex domain
        source: '/:path*',
        has: [{ type: 'host', value: 'www.panevinonaples.com' }],
        destination: 'https://panevinonaples.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
