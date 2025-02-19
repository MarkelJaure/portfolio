import React from 'react';
import { Box, Typography, Paper, Grid, Stack, useTheme } from "@mui/material";
import { FaDatabase, FaTools, FaCode, FaGlobe } from "react-icons/fa";
import ToolTag from "./ToolTag/ToolTag";
import useTechnologies from "@/hooks/useTecnologies";

export default function Technologies() {
  const theme = useTheme();

  const technologies = [
    {
      category: "Frontend",
      icon: <FaGlobe size={32} color={theme.palette.primary.main} />,
      tools: useTechnologies(["React", "Next.js", "TypeScript", "JavaScript"]),
    },
    {
      category: "Backend",
      icon: <FaCode size={32} color={theme.palette.secondary.main} />,
      tools: useTechnologies(["Node.js", "Express.js", "Nest.js", "Java", "PHP"]),
    },
    {
      category: "Bases de Datos",
      icon: <FaDatabase size={32} color={theme.palette.warning.main} />,
      tools: useTechnologies(["MongoDB", "PostgreSQL", "MySQL"]),
    },
    {
      category: "Herramientas",
      icon: <FaTools size={32} color={theme.palette.info.main} />,
      tools: useTechnologies(["Git", "Docker", "Nginx"]),
    }
  ];

  return (
    <Box id="technologies" my={8}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" fontFamily="Consolas, monospace" mb={6}>
        Tecnologías
      </Typography>
      <Grid container spacing={3}>
        {technologies.map((tech, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[6],
                },
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <Box sx={{ 
                  p: 1, 
                  borderRadius: '50%', 
                  backgroundColor: theme.palette.background.default,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {tech.icon}
                </Box>
                <Typography variant="h6" fontFamily="Consolas, monospace" fontWeight="bold">
                  {tech.category}
                </Typography>
              </Stack>
              <Box sx={{ flexGrow: 1 }}>
                <Stack direction="row" gap={1} flexWrap="wrap">
                  {tech.tools.map((tool, idx) => (
                    <ToolTag key={idx} name={tool.name} icon={tool.icon} />
                  ))}
                </Stack>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}