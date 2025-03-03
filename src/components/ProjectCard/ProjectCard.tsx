import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Stack,
	Button,
	Grid,
	useTheme,
	useMediaQuery,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ToolTag from '../ToolTag/ToolTag';
import ImageSlider from '../ImageSlider/ImageSlider';
import { useTranslation } from 'react-i18next';

type ProjectCardProps = {
	project: {
		id: string;
		title: string;
		description: any;
		images: string[];
		tools: { name: string; icon: React.ReactElement }[];
		previewUrl?: string;
		presentationUrl?: string;
		paperUrl?: string;
		sourceUrl?: string;
		playstoreUrl?: string;
		type: 'work' | 'personal';
		relevance: 'principal' | 'secondary';
	};
};

const ProjectCard = ({ project }: ProjectCardProps) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const { t } = useTranslation();

	return (
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

						<Stack direction='row' flexWrap='wrap' sx={{ mb: 2, gap: 1 }}>
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
								{t('projects.buttons.preview')}
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
								{t('projects.buttons.presentation')}
							</Button>
						)}
						{project.paperUrl && (
							<Button
								variant='outlined'
								startIcon={<PictureAsPdfIcon />}
								href={project.paperUrl}
								target='_blank'
							>
								{t('projects.buttons.paper')}
							</Button>
						)}
						{project.sourceUrl && (
							<Button
								variant='outlined'
								startIcon={<GitHubIcon />}
								href={project.sourceUrl}
								target='_blank'
							>
								{t('projects.buttons.source')}
							</Button>
						)}
						{project.playstoreUrl && (
							<Button
								variant='outlined'
								startIcon={<GoogleIcon />}
								href={project.playstoreUrl}
								target='_blank'
							>
								{t('projects.buttons.playstore')}
							</Button>
						)}
					</CardActions>
				</Card>
			</Grid>
			<Grid item xs={12} md={5}>
				<Card elevation={3} sx={{ height: isMobile ? '200px' : '100%' }}>
					<ImageSlider
						images={project.images}
						type={t(`projects.types.${project.type}`)}
					/>
				</Card>
			</Grid>
		</Grid>
	);
};

export default ProjectCard;
