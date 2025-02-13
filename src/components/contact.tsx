

import {  Typography, Box, Link } from '@mui/material';


const contact = {
  title: "Contacto",
  email: "markeljaure2000@gmail.com"
};

const ContactSection = () => {
  return (
            <Box id="contact" my={4} textAlign="center">
              <Typography variant="h4" fontWeight="bold">{contact.title}</Typography>
              <Typography variant="body1" mt={2}>
                ¡Hablemos! Escríbeme a{" "}
                <Link href={`mailto:${contact.email}`} color="primary" sx={{ textDecoration: 'none' }}>
                  {contact.email}
                </Link>
              </Typography>
            </Box>);
}

export default ContactSection;

