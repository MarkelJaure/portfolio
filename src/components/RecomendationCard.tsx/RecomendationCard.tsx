'use client';
import {
	Box,
	Typography,
	Avatar,
	Card,
	CardContent,
	useTheme,
	useMediaQuery,
} from '@mui/material';

type RecomendationCardProps = {
	recommendation: {
		id: number;
		avatar: string;
		name: string;
		role: string;
		text: string;
	};
};

const RecomendarionCard = ({ recommendation }: RecomendationCardProps) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const isTablet = useMediaQuery(theme.breakpoints.down('md'));

	// Determine card width based on screen size
	const getCardWidth = () => {
		if (isMobile) return '280px';
		if (isTablet) return '320px';
		return '350px';
	};

	return (
		<Card
			sx={{
				width: getCardWidth(),
				minWidth: getCardWidth(),
				height: '220px', // Fixed height for consistency
				borderRadius: 2,
				boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
				transition: 'transform 0.3s, box-shadow 0.3s',
				'&:hover': {
					transform: 'translateY(-5px)',
					boxShadow: '0 12px 28px rgba(0,0,0,0.2)',
				},
				// More subtle background
				bgcolor: 'background.paper',
				backdropFilter: 'blur(8px)',
				display: 'flex',
				flexDirection: 'column',
				overflow: 'hidden',
			}}
		>
			{/* Header with avatar and name/role */}
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					p: 2,
					borderBottom: `1px solid ${
						theme.palette.mode === 'dark'
							? 'rgba(255,255,255,0.1)'
							: 'rgba(0,0,0,0.1)'
					}`,
					bgcolor:
						theme.palette.mode === 'dark'
							? 'rgba(20, 20, 20, 0.4)'
							: 'rgba(245, 245, 245, 0.4)',
				}}
			>
				<Avatar
					src={recommendation.avatar}
					alt={recommendation.name}
					sx={{
						width: 50,
						height: 50,
						border: `2px solid ${theme.palette.primary.main}`,
						boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
					}}
				/>
				<Box sx={{ ml: 2 }}>
					<Typography
						variant='h6'
						component='h3'
						sx={{
							fontWeight: 'bold',
							fontSize: '1rem',
							lineHeight: 1.2,
						}}
					>
						{recommendation.name}
					</Typography>
					<Typography
						variant='subtitle2'
						sx={{
							fontSize: '0.8rem',
							color:
								theme.palette.mode === 'dark'
									? 'rgba(255,255,255,0.7)'
									: 'rgba(0,0,0,0.7)',
						}}
					>
						{recommendation.role}
					</Typography>
				</Box>
			</Box>

			{/* Recommendation text */}
			<CardContent
				sx={{
					p: 2,
					flexGrow: 1,
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<Typography
					variant='body2'
					sx={{
						fontStyle: 'italic',
						lineHeight: 1.5,
						position: 'relative',
						pl: 2,
						// Ensure text doesn't overflow and shows ellipsis
						overflow: 'hidden',
						display: '-webkit-box',
						WebkitLineClamp: 5,
						WebkitBoxOrient: 'vertical',
					}}
				>
					{recommendation.text}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default RecomendarionCard;
