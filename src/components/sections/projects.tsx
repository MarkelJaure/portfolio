import {
	Typography,
	Box,
	Grid,
	useMediaQuery,
	useTheme,
	Divider,
} from '@mui/material';
import useTechnologies from '@/hooks/useTecnologies';
import { useTranslation } from 'react-i18next';
import SecondaryProjectsCarousel from '../ProjectCard/SecondaryProjectSection';
import ProjectCard from '../ProjectCard/ProjectCard';
import TranslatedTypography from '../TranslatedTypography/TranslatedTypography';

type ProjectCardProps = {
	id: string;
	title: string;
	titleExtended?: string;
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

const ProjectsSection = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const { t } = useTranslation();

	const projects: ProjectCardProps[] = [
		{
			id: 'mic',
			title: t('projects.items.mic.title'),
			description: (
				<TranslatedTypography
					i18nKey='projects.items.mic.description'
					variant='body2'
				/>
			),
			images: ['/mic.webp'],
			tools: useTechnologies(['Next.js', 'Nest.js', 'PostgreSQL']),
			previewUrl: 'https://mapainteractivocultural.ar/',
			playstoreUrl:
				'https://play.google.com/store/apps/details?id=ar.mapainteractivocultural.twa&hl=es_AR',
			type: 'work',
			relevance: 'principal',
		},
		{
			id: 'tesina',
			title: t('projects.items.tesina.title'),
			description: (
				<TranslatedTypography
					i18nKey='projects.items.tesina.description'
					variant='body2'
				/>
			),
			images: ['/tesina.webp'],
			tools: useTechnologies(['Python', 'Plotly', 'IA']),
			presentationUrl: 'https://www.youtube.com/watch?v=-lJj-gLqyWc&t=2532s',
			paperUrl: 'tesina.pdf',
			type: 'personal',
			relevance: 'principal',
		},
		{
			id: 'anp',
			title: t('projects.items.anp.title'),
			description: (
				<TranslatedTypography
					i18nKey='projects.items.anp.description'
					variant='body2'
				/>
			),
			images: ['/anp.webp', 'indicadores.webp'],
			tools: useTechnologies(['React', 'Node.js', 'MongoDB']),
			type: 'work',
			relevance: 'principal',
		},
		{
			id: 'vaidika',
			title: t('projects.items.vaidika.title'),
			titleExtended: t('projects.items.vaidika.titleExtended'),
			description: (
				<TranslatedTypography
					i18nKey='projects.items.vaidika.description'
					variant='body2'
				/>
			),
			images: ['/Vaidika.webp'],
			tools: useTechnologies(['PHP', 'MySQL']),
			previewUrl: 'https://www.vaidikayogamadryn.com/',
			type: 'work',
			relevance: 'secondary',
		},
		{
			id: 'cubegraph',
			title: t('projects.items.cubegraph.title'),
			titleExtended: t('projects.items.cubegraph.titleExtended'),
			description: (
				<TranslatedTypography
					i18nKey='projects.items.cubegraph.description'
					variant='body2'
				/>
			),
			images: ['/cubegraph.webp'],
			tools: useTechnologies(['React', 'JavaScript', 'Firebase']),
			previewUrl: 'https://cubegraph.firebaseapp.com/practice',
			sourceUrl: 'https://github.com/MarkelJaure/CubeGraph',
			type: 'personal',
			relevance: 'secondary',
		},
		{
			id: 'mapyzer',
			title: t('projects.items.mapyzer.title'),
			titleExtended: t('projects.items.mapyzer.titleExtended'),
			description: (
				<TranslatedTypography
					i18nKey='projects.items.mapyzer.description'
					variant='body2'
				/>
			),
			images: ['/mapyzer.webp'],
			tools: useTechnologies(['Angular', 'Node.js', 'PostgreSQL']),
			sourceUrl: 'https://github.com/MarkelJaure/mapyzer',
			paperUrl: 'Mapyzer.pdf',
			type: 'personal',
			relevance: 'secondary',
		},
		{
			id: 'fishing-app',
			title: t('projects.items.fishing-app.title'),
			titleExtended: t('projects.items.fishing-app.titleExtended'),
			description: (
				<TranslatedTypography
					i18nKey='projects.items.fishing-app.description'
					variant='body2'
				/>
			),
			images: ['/fishing-app-2.webp'],
			tools: useTechnologies(['Kotlin', 'Android', 'Firebase']),
			sourceUrl: 'https://github.com/MarkelJaure/Fishing-App',
			type: 'personal',
			relevance: 'secondary',
		},
	];

	const mainProjects = projects.filter(
		(project) => project.relevance === 'principal'
	);
	const secondaryProjects = projects.filter(
		(project) => project.relevance === 'secondary'
	);

	return (
		<Box id='projects' my={4}>
			<Typography
				variant='h4'
				fontWeight='bold'
				textAlign='center'
				fontFamily={'monospace'}
				mb={4}
			>
				{t('projects.title')}
			</Typography>

			<Grid container spacing={isMobile ? 0 : 4}>
				{mainProjects.map((project, index) => (
					<Grid item xs={12} key={index} id={project.id}>
						<ProjectCard project={project} />
						{isMobile && index < projects.length - 1 && (
							<Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
								<Divider sx={{ width: '50%' }} />
							</Box>
						)}
					</Grid>
				))}
			</Grid>

			{secondaryProjects.length > 0 && (
				<Box mt={4}>
					<SecondaryProjectsCarousel projects={secondaryProjects} />
				</Box>
			)}
		</Box>
	);
};

export default ProjectsSection;
