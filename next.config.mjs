/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Exportar el sitio web como archivos estáticos
  distDir: "out", // Directorio de salida es "/out"
  trailingSlash: true, // Agregar una barra al final de las rutas, ejemplo /about/
  images: {
    unoptimized: true, // Desactiva la optimización de imágenes
  }, // Deshabilitar la optimización de imágenes

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
