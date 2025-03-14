import { Box, Typography } from '@mui/material';

type Props = {
	name?: string;
	icon: any;
};

const ToolTag = ({ name, icon }: Props) => {
	return (
		<Box
			sx={{
				bgcolor: 'secondary.light',
				px: 1.5,
				py: 0.5,
				borderRadius: 2,
				border: '1px solid rgba(0, 0, 0, 0.3)',
				display: 'flex',
				alignItems: 'center',
				color: 'black',
				transition: 'background-color 0.3s',

				'&:hover': {
					backgroundColor: icon.props.color + '30',
				},
			}}
		>
			{icon}
			{name && (
				<Typography
					variant='body2'
					ml={0.5}
					sx={{ pointerEvents: 'none' }}
					color='text.primary'
				>
					{name}
				</Typography>
			)}
		</Box>
	);
};

export default ToolTag;
