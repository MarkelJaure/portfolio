import { Typography, Box } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { WorkflowIcon as Work } from 'lucide-react';

const experiences = [
  { 
    title: "Mapa Interactivo cultural",
    period: "2023 - ACTUALIDAD",
    role: "Desarrollador Semi-Senior",
    description: [
      "Desarrollo y mantenimiento de una **PWA** desde cero hasta su despliegue en producción.",
      "Trabajo en equipo de forma **remota**, asegurando la implementación de nuevas funcionalidades y la optimización del sistema.",
      "Trabajo **Full Stack**, siguiendo metodologías ágiles (**Scrum**)."
    ]
  },
  { 
    title: "ANPPV - Área Natural Protegida Península Valdés",
    period: "2022 - 2023",
    role: "Desarrollador Full Stack",
    description: [
      "Desarrollo de sistemas de **gestión e información** para la administración del área protegida.",
      "Implementación de funcionalidades clave para mejorar el manejo de **datos ambientales y operativos**.",
      "Trabajo en equipo de forma **híbrida**."
    ]
  }
];

const ExperienceSection = () => {
  const renderDescription = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <Box id="experience" my={4}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4} fontFamily={"Consolas, monospace"}>
        Experiencia
      </Typography>
      <Timeline position="right">
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{ flex: 0 }}></TimelineOppositeContent>
            <TimelineSeparator sx={{ paddingLeft: 0 }}>
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
                <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                  {exp.description.map((item, i) => (
                    <Typography component="li" variant="body2" key={i}>
                      {renderDescription(item)}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}

export default ExperienceSection;