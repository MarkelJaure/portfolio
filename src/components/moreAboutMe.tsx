import { Box, Typography, Grid } from "@mui/material";

const moreAboutMe = {
  title: "Más sobre mí",
  description:
    "Durante gran parte de mi vida he estado involucrado en el handball como jugador. Por ello, cuento con más de 5 años de experiencia como coordinador y entrenador de todas las categorías del club J. L. Grilli en el área de Beach Handball durante las temporadas de verano.",
  videos: ["/beach2.mp4","/beach.mp4", "/beach3.mp4"],
};

const MoreAboutMe = () => {
  return (
    <Box id="more-about" my={4} textAlign="center">
      <Typography variant="h4" fontWeight="bold" fontFamily={"Consolas, monospace"}>
        {moreAboutMe.title}
      </Typography>
      <Typography variant="body1" mt={2}>
        {moreAboutMe.description}
      </Typography>

      <Grid container spacing={2} justifyContent="center" mt={3}>
        {moreAboutMe.videos.map((video, index) => (
          <Grid item key={index} xs={12} sm={4}>
            <Box display="flex" justifyContent="center">
              <video 
                src={video} 
                width="100%" 
                style={{ maxHeight: "500px", borderRadius: "8px" }} 
                autoPlay 
                muted 
                loop 
                playsInline 
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


export default MoreAboutMe;
