import { Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';

const type_enum: { [key: string]: { icon: React.ReactElement } } = {
	Personal: { icon: <PersonIcon sx={{ color: 'white' }} /> },
	Laboral: { icon: <WorkIcon sx={{ color: 'white' }} /> },
	Work: { icon: <WorkIcon sx={{ color: 'white' }} /> },
};

const TypeTag = ({ type }: { type: string }) => {
	const typeData = type_enum[type];

	if (!typeData) return null;

	return (
		<Box
			sx={{
				position: 'absolute',
				bottom: 10,
				right: 10,
				zIndex: 10,
				bgcolor: 'primary.main',
				borderRadius: 10,
				padding: '0.25rem 0.75rem',
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				opacity: 0.9,
				boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.7)', // Sombra suave
			}}
		>
			{type_enum[type].icon}
			<Typography
				variant='body2'
				sx={{ pointerEvents: 'none' }}
				color='white'
				fontStyle={'bold'}
			>
				{type}
			</Typography>
		</Box>
	);
};

export default TypeTag;
