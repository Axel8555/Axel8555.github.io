import "@/styles/globals.css";
import "@/styles/font-styles.css";

export const metadata = {
  title: "Curriculum Vitae - Leonardo Axel Ortiz Zaragoza",
  description: "Full Stack Developer | Computer Systems Engineer",
  icons: {
    icon: "/favicon.png",
    appleIcon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
