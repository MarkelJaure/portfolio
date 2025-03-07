import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Stack,
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
import TooltipIconButton from '../TooltipIconButton/TooltipIconButton';

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
						<TooltipIconButton
							show={project.previewUrl !== undefined}
							title={t('projects.buttons.preview')}
							size='medium'
							href={project.previewUrl || ''}
							Icon={LaunchIcon}
						/>
						<TooltipIconButton
							show={project.presentationUrl !== undefined}
							title={t('projects.buttons.presentation')}
							size='medium'
							href={project.presentationUrl || ''}
							Icon={YouTubeIcon}
							color={'error'}
						/>

						<TooltipIconButton
							show={project.playstoreUrl !== undefined}
							title={t('projects.buttons.playstore')}
							size='medium'
							href={project.playstoreUrl || ''}
							Icon={GoogleIcon}
						/>
						<TooltipIconButton
							show={project.paperUrl !== undefined}
							title={t('projects.buttons.paper')}
							size='medium'
							href={project.paperUrl || ''}
							Icon={PictureAsPdfIcon}
						/>
						<TooltipIconButton
							show={project.sourceUrl !== undefined}
							title={t('projects.buttons.source')}
							size='medium'
							href={project.sourceUrl || ''}
							Icon={GitHubIcon}
						/>
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
