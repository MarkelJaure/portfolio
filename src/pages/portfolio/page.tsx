
"use client";
import { Container, Button, Box, AppBar, Toolbar, IconButton } from '@mui/material';
import { Home, Work, Code, Mail,LaptopChromebook } from '@mui/icons-material'; // Iconos para el Navbar
import { useIsMobile } from '@/hooks/useIsMobile';
import HeroSection from '@/components/hero';
import AboutMeSection from '@/components/aboutMe';
import ExperienceSection from '@/components/experience';
import ProyectsSection from '@/components/proyects';
import ContactSection from '@/components/contact';
import TechnologiesSection from '@/components/tecnologies';

// Datos parametrizados
const sections = [
  { id: 'hero', title: 'Inicio', icon: <Home /> },
  { id: 'experience', title: 'Experiencia', icon: <Work /> },
  { id: 'projects', title: 'Proyectos', icon: <Code /> },
  {id:'technologies',title: 'Tecnologias', icon: <LaptopChromebook /> }, 
  { id: 'contact', title: 'Contacto', icon: <Mail /> },
];

function Navbar() {
    const isMobile = useIsMobile(); // Usa el hook personalizado

    const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
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

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ py: 4 }}>
        {/* Hero Section */}
        <HeroSection />
        {/* Sobre Mí */}
        <AboutMeSection />

        {/* Experiencia */}
        <ExperienceSection />

        {/* Proyectos */}
        <ProyectsSection />

        <TechnologiesSection/>

        {/* Contacto */}
        <ContactSection />
      </Container>
    </>
  );
}