/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  assetPrefix: '',
  output: "export",
  webpack: (config, { isServer }) => {
    // Configura webpack para polling en lugar de los middleware de desarrollo
    config.watchOptions = {
      poll: 1000, // Verifica cambios cada segundo
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;