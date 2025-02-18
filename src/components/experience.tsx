import { Typography, Box } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { WorkflowIcon as Work } from 'lucide-react';

const experiences = [
  { 
    title: "Mapa Interactivo Cultural", 
    period: "2023 - Actualidad",
    role: "Desarrollador Semi-Senior",
    description: "Desarrollo de un mapa interactivo para mostrar puntos de interés cultural."
  },
  { 
    title: "ANPPV", 
    period: "2022 - 2023",
    role: "Desarrollador Full Stack",
    description: "Implementación de soluciones full stack para la Asociación Nacional de Productores de Palta de Valparaíso."
  }
];

const ExperienceSection = () => {
  return (
    <Box id="experience" my={4}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
        Experiencia
      </Typography>
      <Timeline position="right">
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <Work size={20} />
              </TimelineDot>
              {index !== experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Box
                sx={{
                  p: 2,
                  mb: 2,
                  borderLeft: '2px solid',
                  borderColor: 'primary.main',
                  backgroundColor: 'background.paper',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Typography variant="h6" component="h3" color="primary.main">
                  {exp.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" fontWeight="bold">
                  {exp.role}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={1}>
                  {exp.period}
                </Typography>
                <Typography variant="body2">
                  {exp.description}
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}

export default ExperienceSection;