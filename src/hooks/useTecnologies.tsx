import { useMemo } from "react";
import { FaReact, FaNodeJs, FaJava, FaPython, FaBrain, FaRobot } from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiJavascript, SiExpress, SiNestjs, 
  SiPhp, SiMongodb, SiPostgresql, SiMysql, SiGit, SiDocker, SiNginx, 
  SiPlotly, SiFirebase
} from "react-icons/si";

const technologies = [
  { name: "React", icon: <FaReact size={20} color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs size={20} color="#000000" /> },
  { name: "TypeScript", icon: <SiTypescript size={20} color="#3178C6" /> },
  { name: "JavaScript", icon: <SiJavascript size={20} color="#F7DF1E" /> },
  { name: "Node.js", icon: <FaNodeJs size={20} color="#339933" /> },
  { name: "Express.js", icon: <SiExpress size={20} color="#000000" /> },
  { name: "Nest.js", icon: <SiNestjs size={20} color="#E0234E" /> },
  { name: "Java", icon: <FaJava size={20} color="#007396" /> },
  { name: "PHP", icon: <SiPhp size={20} color="#8993BE" /> },
  { name: "MongoDB", icon: <SiMongodb size={20} color="#47A248" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={20} color="#336791" /> },
  { name: "MySQL", icon: <SiMysql size={20} color="#4479A1" /> },
  { name: "Git", icon: <SiGit size={20} color="#F05032" /> },
  { name: "Docker", icon: <SiDocker size={20} color="#2496ED" /> },
  { name: "Nginx", icon: <SiNginx size={20} color="#009639" /> },
  { name: "Python", icon: <FaPython size={20} color="#3776AB" /> },
  { name: "Plotly", icon: <SiPlotly size={20} color="#3F4F75" /> },
  { name: "Inteligencia Artificial (IA)", icon: <FaBrain size={20} color="#FF8C00" /> },
  { name: "Machine Learning (ML)", icon: <FaRobot size={20} color="#F28D35" /> },
  { name: "Topic Modeling", icon: <FaBrain size={20} color="#5A189A" /> },
  { name: "Firebase", icon: <SiFirebase size={20} color="#FFCA28" /> },
];

// Hook personalizado para filtrar las tecnologías
const useTechnologies = (techNames: string[]) => {
  return useMemo(() => {
    return technologies.filter(tech => techNames.includes(tech.name));
  }, [techNames]);
};

export default useTechnologies;
