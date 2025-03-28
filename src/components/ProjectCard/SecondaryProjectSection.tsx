import { Box } from '@mui/material';
import SecondaryProjectCard from './SecondaryProjectCard';

const SecondaryProjectsSection = ({ projects }: { projects: any[] }) => {
	return (
		<Box my={4} sx={{ display: 'flex', justifyContent: 'center' }}>
			<Box
				sx={{
					display: 'flex',
					gap: 2,
					overflowX: 'auto',
					pb: 1,
					'&::-webkit-scrollbar': { height: 6 },
					'&::-webkit-scrollbar-thumb': { background: '#888', borderRadius: 2 },
				}}
			>
				{projects.map((project) => (
					<SecondaryProjectCard key={project.id} project={project} />
				))}
			</Box>
		</Box>
	);
};

export default SecondaryProjectsSection;
