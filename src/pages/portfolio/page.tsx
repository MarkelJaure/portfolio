import { Container, Typography, Button, Box, Paper } from '@mui/material';

export default function PortfolioWireframe() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
        <Typography variant="h3" fontWeight="bold">Markel Jaureguibehere</Typography>
        <Typography variant="h6" mt={1}>Fullstack Developer | Licenciado en Informática</Typography>
        <Box mt={2}>
          <Button variant="contained" color="secondary" sx={{ mx: 1 }}>Ver CV</Button>
          <Button variant="contained" sx={{ mx: 1 }}>GitHub</Button>
          <Button variant="contained" sx={{ mx: 1 }}>LinkedIn</Button>
        </Box>
      </Paper>
      
      {/* Sobre Mí */}
      <Box my={4} textAlign="center">
        <Typography variant="h4" fontWeight="bold">Sobre Mí</Typography>
        <Typography variant="body1" mt={2}>Soy un desarrollador fullstack especializado en Node.js, React y bases de datos como PostgreSQL y MongoDB.</Typography>
      </Box>
      
      {/* Experiencia */}
      <Box my={4}>
        <Typography variant="h4" fontWeight="bold" textAlign="center">Experiencia</Typography>
        <Paper elevation={2} sx={{ p: 2, mt: 2 }}>
          <Typography variant="h6">Mapa Interactivo Cultural</Typography>
          <Typography variant="body2" color="text.secondary">Desarrollador Semi-Senior (2023 - Actualidad)</Typography>
        </Paper>
        <Paper elevation={2} sx={{ p: 2, mt: 2 }}>
          <Typography variant="h6">ANPPV</Typography>
          <Typography variant="body2" color="text.secondary">Desarrollador Full Stack (2022 - 2023)</Typography>
        </Paper>
      </Box>
      
      {/* Proyectos */}
      <Box my={4}>
        <Typography variant="h4" fontWeight="bold" textAlign="center">Proyectos</Typography>
        <Paper elevation={2} sx={{ p: 2, mt: 2 }}>
          <Typography variant="h6">Proyecto 1</Typography>
          <Typography variant="body2" color="text.secondary">Descripción breve del proyecto</Typography>
        </Paper>
        <Paper elevation={2} sx={{ p: 2, mt: 2 }}>
          <Typography variant="h6">Proyecto 2</Typography>
          <Typography variant="body2" color="text.secondary">Descripción breve del proyecto</Typography>
        </Paper>
      </Box>
      
      {/* Contacto */}
      <Box my={4} textAlign="center">
        <Typography variant="h4" fontWeight="bold">Contacto</Typography>
        <Typography variant="body1" mt={2}>¡Hablemos! Escríbeme a <a href="mailto:markeljaure2000@gmail.com" style={{ color: '#1976d2', textDecoration: 'none' }}>markeljaure2000@gmail.com</a></Typography>
      </Box>
    </Container>
  );
}
