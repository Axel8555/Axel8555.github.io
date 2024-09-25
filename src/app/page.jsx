// pages/index.js
import Background from "@/components/Background";
import Header from "@/components/Header";
import MainComponent from "@/components/MainComponent";
import Footer from "@/components/Footer";
import cvData from "../data/cvData.json";

export default function Home() {
  return (
    <>
      <Background />
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
