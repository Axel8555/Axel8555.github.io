import { Category } from "@/components/Stack";
import { BsGraphUpArrow } from "react-icons/bs";
import { DiMsqlServer } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaFigma,
  FaGit,
  FaHtml5,
  FaJava,
  FaPython,
  FaTrello,
} from "react-icons/fa";
import { FaC, FaComputer, FaGolang, FaReact } from "react-icons/fa6";
import { IoFileTrayStackedSharp } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { MdDns, MdHttp } from "react-icons/md";
import { RiFileExcel2Fill, RiNextjsFill } from "react-icons/ri";
import {
  SiCisco,
  SiGraphql,
  SiHasura,
  SiJavascript,
  SiKnime,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { TbLogs } from "react-icons/tb";
import { VscAzure, VscTerminalLinux } from "react-icons/vsc";

export const techStack: Category[] = [
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
