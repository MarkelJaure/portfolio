"use client";
import { useState, useEffect } from "react";
import { Container, Button, Box, AppBar, Toolbar, IconButton } from "@mui/material";
import { Home, Work, Code, Mail, LaptopChromebook } from "@mui/icons-material";
import { useIsMobile } from "@/hooks/useIsMobile";
import HeroSection from "@/components/hero";
import AboutMeSection from "@/components/aboutMe";
import ExperienceSection from "@/components/experience";
import ProyectsSection from "@/components/proyects";
import ContactSection from "@/components/contact";
import TechnologiesSection from "@/components/tecnologies";

// Datos parametrizados
const sections = [
  { id: "hero", title: "Inicio", icon: <Home /> },
  { id: "experience", title: "Experiencia", icon: <Work /> },
  { id: "projects", title: "Proyectos", icon: <Code /> },
  { id: "technologies", title: "Tecnologías", icon: <LaptopChromebook /> },
  { id: "contact", title: "Contacto", icon: <Mail /> },
];

function Navbar() {
  const isMobile = useIsMobile();
  const [opacity, setOpacity] = useState(1); // Estado para la opacidad

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Ajustamos la opacidad: 1 en la parte superior, 0.8 al hacer scroll
      setOpacity(scrollY > 50 ? 0.7 : 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: `rgba(25, 118, 210, ${opacity})`, // Color dinámico con transparencia
        transition: "background-color 0.3s ease",
      }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Box display="flex" gap={2}>
          {sections.map((section) => (
            <Button
              key={section.id}
              onClick={() => handleScrollToSection(section.id)}
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
        <HeroSection />
        <AboutMeSection />
        <ExperienceSection />
        <ProyectsSection />
        <TechnologiesSection />
        <ContactSection />
      </Container>
    </>
  );
}
