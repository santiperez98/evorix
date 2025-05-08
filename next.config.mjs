/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
          port: '',
          pathname: '/**',
        },
        // Agrega aquí otros dominios que necesites permitir
      ],
    },
  };
  
  export default nextConfig;