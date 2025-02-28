import {
	Typography,
	Box,
	Grid,
	useMediaQuery,
	useTheme,
	Divider,
} from '@mui/material';
import useTechnologies from '@/hooks/useTecnologies';
import { Trans, useTranslation } from 'react-i18next';
import SecondaryProjectsCarousel from '../ProyectCard/SecondaryProjectSection';
import ProjectCard from '../ProyectCard/ProyectCard';

type ProjectCardProps = {
	id: string;
	title: string;
	description: any;
	images: string[];
	tools: { name: string; icon: React.ReactElement }[];
	previewUrl?: string;
	presentationUrl?: string;
	paperUrl?: string;
	sourceUrl?: string;
	type: 'work' | 'personal';
	relevance: 'principal' | 'secondary';
};

const ProyectsSection = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const { t } = useTranslation();

	const projects: ProjectCardProps[] = [
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
			type: 'work',
			relevance: 'principal',
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
				<Trans
					i18nKey='projects.items.anp.description'
					components={{
						strong: <strong />,
					}}
				/>
			),
			images: ['/anp.jpg', 'indicadores.jpeg'],
			tools: useTechnologies(['React', 'Node.js', 'MongoDB']),
			type: 'work',
			relevance: 'principal',
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
			type: 'work',
			relevance: 'secondary',
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
			type: 'personal',
			relevance: 'secondary',
		},
		{
			id: 'mapyzer',
			title: t('projects.items.mapyzer.title'),
			description: (
				<Trans
					i18nKey='projects.items.mapyzer.description'
					components={{
						strong: <strong />,
					}}
				/>
			),
			images: ['/mapyzer.jpeg'],
			tools: useTechnologies(['Angular', 'Node.js', 'PostgreSQL']),
			sourceUrl: 'https://github.com/MarkelJaure/mapyzer',
			type: 'personal',
			relevance: 'secondary',
		},
		{
			id: 'fishing-app',
			title: t('projects.items.fishing-app.title'),
			description: (
				<Trans
					i18nKey='projects.items.fishing-app.description'
					components={{
						strong: <strong />,
					}}
				/>
			),
			images: ['/fishing-app-2.jpeg'],
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
				fontFamily={'Consolas, monospace'}
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

export default ProyectsSection;
