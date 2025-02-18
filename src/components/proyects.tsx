import { 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Button,  
  Stack 
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import useTechnologies from '@/hooks/useTecnologies';
import ToolTag from './ToolTag/ToolTag';



const ProyectsSection = () => {

    const projects = [

    {
    title: "MIC - Mapa Interactivo Cultural",
    description: "Aplicacion PWA para que la cultura, el deporte y el turismo esté en tus manos en un sólo lugar, promoviendo los consumos culturales de tu ciudad.",
    image: "/mic.png",
    tools: useTechnologies(["Next.js", "Nest.js", "PostgreSQL"]),
    previewUrl: "https://mapainteractivocultural.ar/",
  },
      {
    title: "Análisis de Tópicos Dinámicos en Noticias de Chubut",
    description: "Proyecto de Tesina de Grado en Licenciatura en Informática. Sistema que permite Identificar los topicos presentes en las noticias de Chubut y su evolucion temporal en diferentes lapsos de tiempo",
    image: "/tesina.png",
    tools: useTechnologies(["Python", "Plotly","Inteligencia Artificial (IA)"]),
    previewUrl: "https://www.youtube.com/watch?v=-lJj-gLqyWc&t=2532s",
  },  {
    title: "CubeGraph - Practicas de Rubik",
    description: "Plataforma web gratuita para cubos de rubik, con funcion de practica y competencia local",
    image: "/cubegraph.png",
    tools: useTechnologies(["React","JavaScript","Firebase"]),
    previewUrl: "https://cubegraph.firebaseapp.com/practice",
    sourceUrl: "https://github.com/MarkelJaure/CubeGraph"
  },
];


  return (        
    <Box id="projects" sx={{ py: 8 }}>
      <Typography 
        variant="h4" 
        fontWeight="bold" 
        textAlign="center" 
        mb={6}
      >
        Proyectos
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} key={index}>
            <Card 
              elevation={3}
              sx={{
                display: 'flex',
                height: '100%',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 65%' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography 
                    gutterBottom 
                    variant="h6" 
                    component="h3" 
                    fontWeight="bold"
                  >
                    {project.title}
                  </Typography>

                  <Stack 
                    direction="row" 
                    spacing={1} 
                    flexWrap="wrap" 
                    sx={{ mb: 2, gap: 1 }}
                  >
                    {project.tools.map((tool, i) => (
                      <ToolTag key={i} name={tool.name} icon={tool.icon} />
                    ))}
                  </Stack>

                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                  >
                    {project.description}
                  </Typography>
                </CardContent>

                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button 
                    variant="contained" 
                    startIcon={<LaunchIcon />}
                    href={project.previewUrl}
                    target="_blank"
                    sx={{ mr: 1 }}
                  >
                    Preview
                  </Button>
                  {project.sourceUrl && (
                    <Button 
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      href={project.sourceUrl}
                      target="_blank"
                    >
                      Source
                    </Button>
                  )}
                </CardActions>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: '35%', objectFit: 'cover' }}
                image={project.image}
                alt={project.title}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProyectsSection;