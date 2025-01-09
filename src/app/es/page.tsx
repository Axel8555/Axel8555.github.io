// app/en/page.jsx

import Header from "@/components/Header";
import cvData from "@/data/cvData_es.json";
import English from "@app/en/page";

export const metadata = {
  title: "Leonardo Axel Ortiz Zaragoza",
  description: "Full Stack Developer | Ingeniero en Sistemas Computacionales",
  lang: "es",
};

export default function Page() {
  return (
    <>
      {/* <Header data={cvData.header} /> */}
      <English />
    </>
  );
}
