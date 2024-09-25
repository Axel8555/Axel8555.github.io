import Head from "next/head"; // Importar Head de Next.js
import "@/styles/globals.css";
import "@/styles/font-styles.css";

export const metadata = {
  title: "Curriculum Vitae - Leonardo Axel Ortiz Zaragoza",
  description: "STUDENT IN COMPUTER SYSTEMS ENGINEERING | ESCOM IPN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/favicon.png"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
