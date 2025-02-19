import React, { useState } from 'react';
import { Typography, Box, IconButton, Collapse, useMediaQuery, useTheme } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { WorkflowIcon as Work, ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  { 
    title: "Cámara de Industria, Comercio, Producción y Turismo de Puerto Madryn",
    period: "2023 - ACTUALIDAD",
    role: "Desarrollador Semi-Senior - Profesional Independiente",
    description: [
      <Typography key={0} component="li" variant="body2">
        Desarrollo y mantenimiento de una <strong>PWA</strong> desde cero hasta su despliegue en producción.
      </Typography>,
      <Typography key={1} component="li" variant="body2">
        Trabajo en equipo de forma <strong>remota</strong>, asegurando la implementación de nuevas funcionalidades y la optimización del sistema.
      </Typography>,
      <Typography key={2} component="li" variant="body2">
        Trabajo <strong>Full Stack</strong>, siguiendo metodologías ágiles (<strong>Scrum</strong>).
      </Typography>
    ]
  },
  { 
    title: "ANPPV - Área Natural Protegida Península Valdés",
    period: "Marzo 2022 - Diciembre 2022",
    role: "Desarrollador Full Stack - Profesional Independiente",
    description: [
      <Typography key={0} component="li" variant="body2">
        Desarrollo de sistemas de <strong>gestión e información</strong> para la administración del área protegida.
      </Typography>,
      <Typography key={1} component="li" variant="body2">
        Implementación de funcionalidades clave para mejorar el manejo de <strong>datos ambientales y operativos</strong>.
      </Typography>,
      <Typography key={2} component="li" variant="body2">
        Trabajo en equipo de forma <strong>híbrida</strong>.
      </Typography>
    ]
  }
];

const ExperienceSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
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
{isMobile ? (
  <>
    <Box display="flex" justifyContent="center">
      <IconButton onClick={() => toggleExpand(index)} size="small">
        {expandedItems[index] ? <ChevronUp /> : <ChevronDown />}
      </IconButton>
    </Box>
    <Collapse in={expandedItems[index]}>
      <Box component="ul" sx={{ pl: 2, mt: 1 }}>
        {exp.description}
      </Box>
    </Collapse>
  </>
) : (
  <Box component="ul" sx={{ pl: 2, mt: 1 }}>
    {exp.description}
  </Box>
)}
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}

export default ExperienceSection;