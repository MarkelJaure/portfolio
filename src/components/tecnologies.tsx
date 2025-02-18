import { Box, Typography, Paper, Stack } from "@mui/material";
import { FaDatabase, FaTools, FaCode, FaGlobe } from "react-icons/fa";
import ToolTag from "./ToolTag/ToolTag";
import useTechnologies from "@/hooks/useTecnologies";

export default function Technologies() {

    const technologies = [
  {
    category: "Frontend",
    icon: <FaGlobe size={24} color="#61DAFB" />, // Web icon
    tools: useTechnologies(["React", "Next.js", "TypeScript", "JavaScript"]),
  },
  {
    category: "Backend",
    icon: <FaCode size={24} color="#000000" />, // Code icon
    tools: useTechnologies(["Node.js", "Express.js", "Nest.js", "Java", "PHP"]),
  },
  {
    category: "Bases de Datos",
    icon: <FaDatabase size={24} color="#F0DB4F" />, // Database icon
    tools: useTechnologies(["MongoDB", "PostgreSQL", "MySQL"]),
  },
  {
    category: "Herramientas",
    icon: <FaTools size={24} color="#000000" />, // Tools icon
    tools: useTechnologies(["Git", "Docker", "Nginx"]),
  }
];
  return (
    <Box id="technologies" my={4}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" fontFamily={"Consolas, monospace"}>
        Tecnologías
      </Typography>
      {technologies.map((tech, index) => (
        <Paper key={index} elevation={2} sx={{ p: 2, mt: 2 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            {tech.icon}
            <Typography variant="h6">{tech.category}</Typography>
          </Stack>
          <Stack direction="row"  mt={1} gap={1} flexWrap="wrap">
            {tech.tools.map((tool, idx) => (
              <ToolTag key={idx} name={tool.name} icon={tool.icon} />
            ))}
          </Stack>
        </Paper>
      ))}
    </Box>
  );
}
