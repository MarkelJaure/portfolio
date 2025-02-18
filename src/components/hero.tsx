import { Typography, Button, Box, Avatar, Container } from '@mui/material';
import { useIsMobile } from '@/hooks/useIsMobile';
import { GitHub, LinkedIn, Description } from '@mui/icons-material';
import Image from 'next/image';

type ButtonProps = {
  label: string;
  icon: React.ReactElement;
  href: string;
  color: 'primary' | 'secondary';
};

const buttons : ButtonProps[] = [
  {
    label: 'Ver CV',
    icon: <Description />,
    href: '/cv.pdf',
    color: 'secondary'
  },
  {
    label: 'GitHub',
    icon: <GitHub />,
    href: 'https://github.com/MarkelJaure',
    color: 'primary'
  },
  {
    label: 'LinkedIn',
    icon: <LinkedIn />,
    href: 'https://www.linkedin.com/in/markel-jaureguibehere/',
    color: 'primary'
  }
];

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <Box 
      id="hero" 
      sx={{ 
        bgcolor: 'primary.main', 
        color: 'white',
        py: 8,
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <Container maxWidth="md">
        <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} alignItems="center" justifyContent="center" gap={4}>
          <Avatar
            sx={{
              width: isMobile ? 150 : 200,
              height: isMobile ? 150 : 200,
              border: '4px solid white',
              boxShadow: '0 0 20px rgba(0,0,0,0.2)',
            }}
          >
            <Image
              src="/profile.jpeg" // Reemplaza esto con la ruta a tu foto
              alt="Markel Jaureguibehere"
              width={200}
              height={200}
              style={{ objectFit: 'cover' }}
            />
          </Avatar>
          <Box textAlign={isMobile ? 'center' : 'left'}>
            <Typography variant={isMobile ? "h4" : "h3"} fontWeight="bold" mb={1}>
              Markel Jaureguibehere
            </Typography>
            <Typography variant="h6" mb={3} fontFamily={"Consolas, monospace"}>
              Fullstack Developer | Licenciado en Informática
            </Typography>
            <Box display="flex" gap={2} flexWrap="wrap" justifyContent={isMobile ? 'center' : 'flex-start'}>
              {buttons.map((button, index) => (
                <Button 
                  key={index}
                  variant="contained" 
                  color={button.color}
                  startIcon={button.icon}
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {button.label}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection;