// app/layout.jsx

import "@/styles/globals.css";
import "@/styles/font-styles.css";
import Background from "@/components/Background";

export const metadata = {
  title: "Leonardo Axel Ortiz Zaragoza",
  description: "Full Stack Developer | Computer Systems Engineer",
  icons: {
    icon: "/favicon.png",
    appleIcon: "/favicon.png",
  },
};

// body {
//   /*background: var(--background-gradient);*/
//   display: flex;
//   flex-direction: column;
//   padding: 30px 10%;
//   gap: 15px;

//   font-family: var(--font-family)!important;
//   font-size: var(--font-size-small)!important;
//   align-items: center;
// }
export default function RootLayout({ children }) {
  return (
    <html>
      <body className="flex flex-col py-8 px-[10%] gap-4">
        <Background />
        <div className="flex flex-col items-center gap-4">{children}</div>
      </body>
    </html>
  );
}
