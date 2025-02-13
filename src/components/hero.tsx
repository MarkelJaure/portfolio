


import {  Typography, Button, Box, Paper } from '@mui/material';
import { useIsMobile } from '@/hooks/useIsMobile';

const HeroSection = () => {
    const isMobile = useIsMobile();

  return (
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
        </Paper>);
}

export default HeroSection;