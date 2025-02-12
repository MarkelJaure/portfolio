
"use client";


import { Container, Typography, Button, Box, Paper, AppBar, Toolbar, Link, IconButton } from '@mui/material';
import { Home, Person, Work, Code, Mail } from '@mui/icons-material'; // Iconos para el Navbar
import { useIsMobile } from '@/hooks/useIsMobile';


// Datos parametrizados
const sections = [
  { id: 'hero', title: 'Inicio', icon: <Home /> },
  { id: 'about', title: 'Sobre Mí', icon: <Person /> },
  { id: 'experience', title: 'Experiencia', icon: <Work /> },
  { id: 'projects', title: 'Proyectos', icon: <Code /> },
  { id: 'contact', title: 'Contacto', icon: <Mail /> },
];

const aboutMe = {
  title: "Sobre Mí",
  description: "Soy un desarrollador fullstack especializado en Node.js, React y bases de datos como PostgreSQL y MongoDB."
};

const experiences = [
  { title: "Mapa Interactivo Cultural", period: "Desarrollador Semi-Senior (2023 - Actualidad)" },
  { title: "ANPPV", period: "Desarrollador Full Stack (2022 - 2023)" }
];

const projects = [
  { title: "Proyecto 1", description: "Descripción breve del proyecto" },
  { title: "Proyecto 2", description: "Descripción breve del proyecto" }
];

const contact = {
  title: "Contacto",
  email: "markeljaure2000@gmail.com"
};

function Navbar() {
    const isMobile = useIsMobile(); // Usa el hook personalizado

    const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  return (
    <AppBar position="sticky" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Box display="flex" gap={2}>
          {sections.map((section) => (
            <Button
              key={section.id}
              onClick={() => handleScroll(section.id)}
              color="inherit"
              sx={{ textDecoration: "none", fontWeight: "bold" }}
            >
              {isMobile ? (
                <IconButton color="inherit" aria-label={section.title}>
                  {section.icon}
                </IconButton>
              ) : (
                section.title
              )}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default function PortfolioWireframe() {
  const isMobile = useIsMobile(); // Usa el hook personalizado

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ py: 4 }}>
        {/* Hero Section */}
        <Paper id="hero" elevation={3} sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant={isMobile ? "h4" : "h3"} fontWeight="bold">
            Markel Jaureguibehere
          </Typography>
          <Typography variant="h6" mt={1}>Fullstack Developer | Licenciado en Informática</Typography>
          <Box mt={2} display="flex" justifyContent="center" gap={2} flexWrap="wrap">
            <Button variant="contained" color="secondary">Ver CV</Button>
            <Button variant="contained">GitHub</Button>
            <Button variant="contained">LinkedIn</Button>
          </Box>
        </Paper>

        {/* Sobre Mí */}
        <Box id="about" my={4} textAlign="center">
          <Typography variant="h4" fontWeight="bold">{aboutMe.title}</Typography>
          <Typography variant="body1" mt={2}>{aboutMe.description}</Typography>
        </Box>

        {/* Experiencia */}
        <Box id="experience" my={4}>
          <Typography variant="h4" fontWeight="bold" textAlign="center">Experiencia</Typography>
          {experiences.map((exp, index) => (
            <Paper key={index} elevation={2} sx={{ p: 2, mt: 2 }}>
              <Typography variant="h6">{exp.title}</Typography>
              <Typography variant="body2" color="text.secondary">{exp.period}</Typography>
            </Paper>
          ))}
        </Box>

        {/* Proyectos */}
        <Box id="projects" my={4}>
          <Typography variant="h4" fontWeight="bold" textAlign="center">Proyectos</Typography>
          {projects.map((proj, index) => (
            <Paper key={index} elevation={2} sx={{ p: 2, mt: 2 }}>
              <Typography variant="h6">{proj.title}</Typography>
              <Typography variant="body2" color="text.secondary">{proj.description}</Typography>
            </Paper>
          ))}
        </Box>

        {/* Contacto */}
        <Box id="contact" my={4} textAlign="center">
          <Typography variant="h4" fontWeight="bold">{contact.title}</Typography>
          <Typography variant="body1" mt={2}>
            ¡Hablemos! Escríbeme a{" "}
            <Link href={`mailto:${contact.email}`} color="primary" sx={{ textDecoration: 'none' }}>
              {contact.email}
            </Link>
          </Typography>
        </Box>
      </Container>
    </>
  );
}