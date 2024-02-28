
import { Inter } from "next/font/google";
import Head from 'next/head'; // Importar Head de Next.js
import "./globals.css";
import "./font-styles.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: 'Curriculum Vitae - Leonardo Axel Ortiz Zaragoza',
  description: 'STUDENT IN COMPUTER SYSTEMS ENGINEERING | ESCOM IPN',
}
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
