
import { Typography,  Box} from '@mui/material';


const aboutMe = {
  title: "Sobre Mí",
  description: "Soy un desarrollador fullstack especializado en Node.js, React y bases de datos como PostgreSQL y MongoDB."
};


const AboutMeSection = () => {
  return (
    <Box id="about" my={4} textAlign="center">
        <Typography variant="h4" fontWeight="bold">{aboutMe.title}</Typography>
        <Typography variant="body1" mt={2}>{aboutMe.description}</Typography>
    </Box>
    );
}

export default AboutMeSection;