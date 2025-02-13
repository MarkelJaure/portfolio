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
    title: "AdventJS - Retos de programación",
    description: "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20desde%202025-02-13%2013-53-15-8LEiwyJIFsYyFG1yhAZHGNyNOCpWR0.png",
    tools: useTechnologies(["Next.js", "React", "TypeScript"]),
    previewUrl: "https://example.com/preview",
    sourceUrl: "https://github.com/example/project"
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
                  <Button 
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href={project.sourceUrl}
                    target="_blank"
                  >
                    Source
                  </Button>
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