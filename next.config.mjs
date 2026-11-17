/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/libro',
        destination: '/libroprimeroamate',
        permanent: true,
      },
      {
        source: '/libro-primero-amate',
        destination: '/libroprimeroamate',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
