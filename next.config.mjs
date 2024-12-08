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

    // Configura webpack para manejar archivos SVG, @svgr/webpack

    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
