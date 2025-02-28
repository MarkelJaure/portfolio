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

	if (!typeData) return null; // Si no existe, no renderiza nada

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
				color: 'black',
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				gap: 0.2,
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
