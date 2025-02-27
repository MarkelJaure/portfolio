import {
	Typography,
	Box,
	Grid,
	Card,
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
import ToolTag from '../ToolTag/ToolTag';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageSlider from '../ImageSlider/ImageSlider';
import { Trans, useTranslation } from 'react-i18next';

const ProyectsSection = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const { t } = useTranslation();

	const projects = [
		{
			id: 'mic',
			title: t('projects.items.mic.title'),
			description: (
				<Trans
					i18nKey='projects.items.mic.description'
					components={{
						strong: <strong />,
					}}
				/>
			),
			images: ['/mic.png'],
			tools: useTechnologies(['Next.js', 'Nest.js', 'PostgreSQL']),
			previewUrl: 'https://mapainteractivocultural.ar/',
			type: 'Laboral',
		},
		{
			id: 'tesina',
			title: t('projects.items.tesina.title'),
			description: (
				<Trans
					i18nKey='projects.items.tesina.description'
					components={{
						strong: <strong />,
					}}
				/>
			),
			images: ['/tesina.png'],
			tools: useTechnologies([
				'Python',
				'Plotly',
				'Inteligencia Artificial (IA)',
			]),
			presentationUrl: 'https://www.youtube.com/watch?v=-lJj-gLqyWc&t=2532s',
			paperUrl: 'tesina.pdf',
			type: 'Personal',
		},
		{
			id: 'anp',
			title: t('projects.items.anp.title'),
			description: (
				<Trans
					i18nKey='projects.items.anp.description'
					components={{
						strong: <strong />,
					}}
				/>
			),
			images: ['/anp.jpg', 'indicadores.jpeg'],
			tools: useTechnologies(['React', 'Node.js', 'MongoDB']),
			type: 'Laboral',
		},
		{
			id: 'vaidika',
			title: t('projects.items.vaidika.title'),
			description: (
				<Trans
					i18nKey='projects.items.vaidika.description'
					components={{
						strong: <strong />,
					}}
				/>
			),
			images: ['/Vaidika.png'],
			tools: useTechnologies(['PHP', 'MySQL']),
			previewUrl: 'https://www.vaidikayogamadryn.com/',
			type: 'Laboral',
		},
		{
			id: 'cubegraph',
			title: t('projects.items.cubegraph.title'),
			description: (
				<Trans
					i18nKey='projects.items.cubegraph.description'
					components={{
						strong: <strong />,
					}}
				/>
			),
			images: ['/cubegraph.png'],
			tools: useTechnologies(['React', 'JavaScript', 'Firebase']),
			previewUrl: 'https://cubegraph.firebaseapp.com/practice',
			sourceUrl: 'https://github.com/MarkelJaure/CubeGraph',
			type: 'Personal',
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
					<Grid item xs={12} key={index} id={project.id}>
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
									<ImageSlider images={project.images} type={project.type} />
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
