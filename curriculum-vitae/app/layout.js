//"use client";
import Head from 'next/head'; // Importar Head de Next.js
import "./globals.css";
import "./font-styles.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
