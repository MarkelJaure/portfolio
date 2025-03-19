import { Box, Tooltip, Typography } from '@mui/material';

type Props = {
	name: string;
	icon: any;
	showName: boolean;
};

const ToolTag = ({ name, icon, showName }: Props) => {
	return (
		<Tooltip title={name}>
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
				{showName && (
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
		</Tooltip>
	);
};

export default ToolTag;
