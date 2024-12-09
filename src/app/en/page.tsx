// app/es/page.jsx

import Header from "@/components/Header";
import cvData from "@/data/cvData_en.json";

export const metadata = {
  title: "Leonardo Axel Ortiz Zaragoza",
  description: "Full Stack Developer | Computer Systems Engineer",
  lang: "en",
};


export default function Page() {
  return (
    <>
      <Header data={cvData.header} />
    </>
  );
}
