import {
	Typography,
	Box,
	Grid,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Button,
	Stack,
	useMediaQuery,
	useTheme,
	Divider,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import useTechnologies from '@/hooks/useTecnologies';
import ToolTag from './ToolTag/ToolTag';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Key, useEffect, useState } from 'react';

const ImageSlider = ({ images }: any) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<Box
			sx={{
				position: 'relative',
				width: '100%',
				height: '100%',
				overflow: 'hidden',
				transition: 'transform 0.3s ease-in-out',
				'&:hover': {
					transform: 'scale(1.05)', // Aplica a todas las imágenes
				},
			}}
		>
			{images.map(
				(image: string | undefined, index: Key | null | undefined) => (
					<CardMedia
						key={index}
						component='img'
						src={image}
						sx={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							transition: 'opacity 1s ease-in-out',
							opacity: index === currentIndex ? 1 : 0,
						}}
						alt='Project Image'
					/>
				)
			)}
		</Box>
	);
};

const ProyectsSection = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const projects = [
		{
			title: 'MIC - Mapa Interactivo Cultural',
			description: (
				<>
					Aplicación <strong>PWA</strong> diseñada para centralizar la{' '}
					<strong>cultura</strong>, el <strong>deporte</strong> y el{' '}
					<strong>turismo</strong> en un solo lugar. Facilita el acceso a
					eventos y actividades <strong>culturales</strong> de tu ciudad,
					promoviendo la participación y el consumo <strong>cultural</strong>{' '}
					local. Disponible en la web y en <strong>Google Play</strong>.
				</>
			),
			images: ['/mic.png'],
			tools: useTechnologies(['Next.js', 'Nest.js', 'PostgreSQL']),
			previewUrl: 'https://mapainteractivocultural.ar/',
		},
		{
			title: 'Dynamic Topic Modeling en noticias de Chubut',
			description: (
				<>
					Proyecto de tesina de grado en{' '}
					<strong>Licenciatura en Informática</strong>. Sistema de análisis de
					noticias que identifica los temas predominantes en los medios de{' '}
					<strong>Chubut</strong> y su evolución a lo largo del tiempo. Utiliza{' '}
					<strong>Machine Learning (ML)</strong> y técnicas avanzadas de{' '}
					<em>procesamiento de lenguaje natural</em> para el{' '}
					<strong>modelado de tópicos</strong>.
				</>
			),
			images: ['/tesina.png'],
			tools: useTechnologies([
				'Python',
				'Plotly',
				'Inteligencia Artificial (IA)',
			]),
			presentationUrl: 'https://www.youtube.com/watch?v=-lJj-gLqyWc&t=2532s',
			paperUrl: 'tesina.pdf',
		},
		{
			title: 'Sistema de encuestas dinámicas para la Península Valdés',
			description: (
				<>
					Plataforma web diseñada para recopilar la experiencia de los
					visitantes en Península Valdés. El{' '}
					<strong>sistema de encuestas dinámico</strong> se adapta en tiempo
					real a las respuestas de los usuarios. Cuenta con internacionalización
					y visualización de indicadores estadísticos.
				</>
			),
			images: ['/anp.jpg', 'indicadores.jpeg'],
			tools: useTechnologies(['React', 'Node.js', 'MongoDB']),
		},
		{
			title: 'Vaidika - Yoga en Madryn',
			description: (
				<>
					Vaidika es una página de <strong>E-Learning</strong> para la práctica
					de yoga en Madryn. Cuenta con un Backoffice para la carga de cursos,
					módulos y clases, y una User App con login para el consumo de cursos.
					Desplegada en producción a través de <strong>Ferozo</strong>.
				</>
			),
			images: ['/Vaidika.png'],
			tools: useTechnologies(['PHP', 'MySQL']),
			previewUrl: 'https://www.vaidikayogamadryn.com/',
		},
		{
			title: 'CubeGraph - Prácticas de Rubik',
			description: (
				<>
					<strong>Side project</strong> personal desarrollado como una
					oportunidad para aprender y mejorar el uso de tecnologías web.
					CubeGraph es una plataforma interactiva para entusiastas del cubo de{' '}
					<em>Rubik</em>, donde se puede entrenar con cronómetros de resolución,
					competiciones 1vs1 en local y analizar el progreso con{' '}
					<strong>estadísticas detalladas</strong>.
				</>
			),
			images: ['/cubegraph.png'],
			tools: useTechnologies(['React', 'JavaScript', 'Firebase']),
			previewUrl: 'https://cubegraph.firebaseapp.com/practice',
			sourceUrl: 'https://github.com/MarkelJaure/CubeGraph',
		},
	];

	return (
		<Box id='projects' my={4}>
			<Typography
				variant='h4'
				fontWeight='bold'
				textAlign='center'
				fontFamily={'Consolas, monospace'}
				mb={4}
			>
				Proyectos
			</Typography>

			<Grid container spacing={isMobile ? 0 : 4}>
				{projects.map((project, index) => (
					<Grid item xs={12} key={index}>
						<Grid container spacing={2}>
							<Grid item xs={12} md={7}>
								<Card
									elevation={3}
									sx={{
										display: 'flex',
										flexDirection: 'column',
										height: '100%',
										transition: 'transform 0.2s ease-in-out',
										'&:hover': {
											transform: 'translateY(-4px)',
										},
									}}
								>
									<CardContent sx={{ flex: '1 0 auto' }}>
										<Typography
											gutterBottom
											variant='h6'
											component='h3'
											fontWeight='bold'
										>
											{project.title}
										</Typography>

										<Stack
											direction='row'
											flexWrap='wrap'
											sx={{ mb: 2, gap: 1 }}
										>
											{project.tools.map((tool, i) => (
												<ToolTag key={i} name={tool.name} icon={tool.icon} />
											))}
										</Stack>

										<Typography variant='body2' color='text.primary'>
											{project.description}
										</Typography>
									</CardContent>

									<CardActions sx={{ p: 2, pt: 0 }}>
										{project.previewUrl && (
											<Button
												variant='contained'
												startIcon={<LaunchIcon />}
												href={project.previewUrl}
												target='_blank'
											>
												Preview
											</Button>
										)}
										{project.presentationUrl && (
											<Button
												variant='contained'
												startIcon={<YouTubeIcon />}
												href={project.presentationUrl}
												target='_blank'
												color='error'
											>
												Presentation
											</Button>
										)}
										{project.paperUrl && (
											<Button
												variant='outlined'
												startIcon={<PictureAsPdfIcon />}
												href={project.paperUrl}
												target='_blank'
											>
												Paper
											</Button>
										)}
										{project.sourceUrl && (
											<Button
												variant='outlined'
												startIcon={<GitHubIcon />}
												href={project.sourceUrl}
												target='_blank'
											>
												Source
											</Button>
										)}
									</CardActions>
								</Card>
							</Grid>
							<Grid item xs={12} md={5}>
								<Card
									elevation={3}
									sx={{ height: isMobile ? '200px' : '100%' }}
								>
									<ImageSlider images={project.images} />
								</Card>
							</Grid>
						</Grid>
						{isMobile && index < projects.length - 1 && (
							<Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
								<Divider sx={{ width: '50%' }} />
							</Box>
						)}
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default ProyectsSection;
