"use client";
import {
  FaReact,
  FaDocker,
  FaGit,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3,
  FaAws,
  FaFigma,
  FaTrello,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiHasura,
  SiPostgresql,
  SiCisco,
  SiKnime,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { motion } from "framer-motion";
import { JSX, useState, useEffect } from "react";
import React from "react";

interface TechItem {
  name: string;
  icon: JSX.Element;
  color?: string;
}
import { VscAzure, VscTerminalLinux } from "react-icons/vsc";
import { FaC, FaComputer, FaGolang } from "react-icons/fa6";
import { RiFileExcel2Fill, RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { i } from "framer-motion/client";
import { MdDns, MdHttp } from "react-icons/md";
import { DiMsqlServer } from "react-icons/di";
import { IoFileTrayStackedSharp } from "react-icons/io5";
import { TbLogs } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { LuGithub } from "react-icons/lu";

const iconSize = 24; // Tamaño de los iconos

const technologies = [
  {
    name: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 />, color: "#E44D26" },
      { name: "CSS", icon: <FaCss3 />, color: "#1572B6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#007ACC" },
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <RiNextjsFill /> },
    ],
  },
  {
    name: "Backend & API",
    items: [
      { name: "Golang", icon: <FaGolang />, color: "#00ADD8" },
      { name: "Python", icon: <FaPython />, color: "#FFD43B" },
      { name: "Java", icon: <FaJava />, color: "#FF4500" },
      { name: "C", icon: <FaC />, color: "#A8B9CC" },
      {
        name: "Assembler",
        icon: <div className="text-sm">ASM</div>,
        color: "#A8B9CC",
      },
      { name: "GraphQL", icon: <SiGraphql />, color: "#E10098" },
      { name: "Hasura", icon: <SiHasura />, color: "#1EB4D4" },
      { name: "REST", icon: <MdHttp />, color: "#00A896" },
    ],
  },
  {
    name: "Databases",
    items: [
      { name: "MSSQL Server", icon: <DiMsqlServer />, color: "#CC2927" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    ],
  },
  {
    name: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
      { name: "Linux", icon: <VscTerminalLinux />, color: "#FCC624" },
      { name: "Microsoft Azure", icon: <VscAzure />, color: "#0078D4" },
      { name: "Amazon Web Services", icon: <FaAws />, color: "#FF9900" },
    ],
  },
  {
    name: "Networking",
    items: [
      { name: "DHCP", icon: <FaComputer />, color: "#FF5733" },
      { name: "DNS", icon: <MdDns />, color: "#33FF57" },
      { name: "FTP", icon: <IoFileTrayStackedSharp />, color: "#3357FF" },
      { name: "SNMP", icon: <TbLogs />, color: "#FF33A1" },
      { name: "GNS3", icon: <FaComputer />, color: "#FF8C00" },
      { name: "Cisco Packet Tracer", icon: <SiCisco />, color: "#1BA0D7" },
    ],
  },
  {
    name: "Collaboration & Tools",
    items: [
      { name: "Git", icon: <FaGit />, color: "#F05032" },
      { name: "GitHub", icon: <LuGithub /> },
      { name: "Figma", icon: <FaFigma />, color: "#A259FF" },
      { name: "Trello", icon: <FaTrello />, color: "#0079BF" },
    ],
  },
  {
    name: "Data Analysis",
    items: [
      { name: "KNIME", icon: <SiKnime />, color: "#F7B500" },
      { name: "Advanced Excel", icon: <RiFileExcel2Fill />, color: "#217346" },
      { name: "Power BI", icon: <BsGraphUpArrow />, color: "#F2C811" },
      { name: "Pandas", icon: <SiPandas />, color: "#150458" },
      { name: "Numpy", icon: <SiNumpy />, color: "#013243" },
    ],
  },
];

interface TechCategoryProps {
  category: {
    name: string;
    items: TechItem[];
  };
}

const TechCategory = ({ category }: TechCategoryProps) => (
  <TabsContent
    key={category.name}
    value={category.name}
    className="mt-4"
  >
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {category.items.map((tech) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardContent className="flex items-center p-4 justify-center space-x-3">
              {React.cloneElement(tech.icon, {
                style: {
                  color: tech.color,
                  fontSize: iconSize,
                  minWidth: iconSize,
                  minHeight: iconSize,
                },
              })}
              <span className="text-sm whitespace-nowrap">{tech.name}</span>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </TabsContent>
);

export default function Stack() {
  const [activeTab, setActiveTab] = useState("Frontend");

  const handlePrev = () => {
    const categoryNames = technologies.map((category) => category.name);
    const currentIndex = categoryNames.indexOf(activeTab);
    const prevIndex =
      (currentIndex - 1 + categoryNames.length) % categoryNames.length;
    setActiveTab(categoryNames[prevIndex]);
  };

  const handleNext = () => {
    const categoryNames = technologies.map((category) => category.name);
    const currentIndex = categoryNames.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % categoryNames.length;
    setActiveTab(categoryNames[nextIndex]);
  };

  useEffect(() => {
    const categoryNames = technologies.map((category) => category.name);
    let currentIndex = categoryNames.indexOf(activeTab);
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % categoryNames.length;
      setActiveTab(categoryNames[currentIndex]);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold text-center">Tech Stack</h2>
      <section className="flex flex-row space-x-6">
        <button
          onClick={handlePrev}
          className="mx-2 mt-2 self-start"
        >
          <FaArrowLeft size={20} />
        </button>
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex-grow"
        >
          <TabsList className="flex overflow-x-auto mb-8">
            {technologies.map((category) => (
              <TabsTrigger
                key={category.name}
                value={category.name}
                className="flex-grow text-center"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {technologies.map((category) => (
            <TechCategory
              key={category.name}
              category={category}
            />
          ))}
        </Tabs>
        <button
          onClick={handleNext}
          className="mx-2 mt-2 self-start"
        >
          <FaArrowRight size={20} />
        </button>
      </section>
    </section>
  );
}
