// app/es/page.jsx

import Header from "@/components/Header";
import MainComponent from "@/components/MainComponent";
import Footer from "@/components/Footer";
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
      <MainComponent
        summary={cvData.summary}
        education={cvData.education}
        professionalObjective={cvData.professionalObjective}
        hardSkills={cvData.hardSkills}
        softSkills={cvData.softSkills}
        languages={cvData.languages}
        academicExperience={cvData.academicExperience}
        professionalExperience={cvData.professionalExperience}
      />
      <Footer contacts={cvData.footer.contacts} />
    </>
  );
}
