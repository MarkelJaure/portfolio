import {  Typography,  Box, Paper } from '@mui/material';

const experiences = [
  { title: "Mapa Interactivo Cultural", period: "Desarrollador Semi-Senior (2023 - Actualidad)" },
  { title: "ANPPV", period: "Desarrollador Full Stack (2022 - 2023)" }
];

const ExperienceSection = () => {
  return (
            <Box id="experience" my={4}>
          <Typography variant="h4" fontWeight="bold" textAlign="center">Experiencia</Typography>
          {experiences.map((exp, index) => (
            <Paper key={index} elevation={2} sx={{ p: 2, mt: 2 }}>
              <Typography variant="h6">{exp.title}</Typography>
              <Typography variant="body2" color="text.secondary">{exp.period}</Typography>
            </Paper>
          ))}
        </Box>
  );

}

export default ExperienceSection;