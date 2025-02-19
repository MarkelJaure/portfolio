"use client";
import { useState, useEffect } from "react";
import { Container, Button, Box, AppBar, Toolbar, IconButton, ThemeProvider, CssBaseline } from "@mui/material";
import { Home, Work, Code, Mail, LaptopChromebook } from "@mui/icons-material";
import { useIsMobile } from "@/hooks/useIsMobile";
import HeroSection from "@/components/hero";
import AboutMeSection from "@/components/aboutMe";
import ExperienceSection from "@/components/experience";
import ProyectsSection from "@/components/proyects";
import ContactSection from "@/components/contact";
import TechnologiesSection from "@/components/tecnologies";
import MoreAboutMe from "@/components/moreAboutMe";
import darkTheme from "@/styles/darkTheme";
import theme from "@/styles/theme";

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
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: `primary.main`,
        opacity: opacity,
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
    const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem("darkMode", JSON.stringify(newTheme));
      return newTheme;
    });
  };
  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <HeroSection darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <AboutMeSection />
        <ExperienceSection />
        <ProyectsSection />
        <TechnologiesSection />
        <MoreAboutMe />
        <ContactSection />
      </Container>
    </ThemeProvider>
  );
}
