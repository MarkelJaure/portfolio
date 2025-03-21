'use client';
import { useEffect, useRef } from 'react';
import {
	Box,
	Typography,
	Avatar,
	Card,
	CardContent,
	useTheme,
	useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import RecomendarionCard from '../RecomendationCard.tsx/RecomendationCard';

// Sample data - replace with your actual data
const recommendationsData = [
	{
		id: 1,
		avatar: 'profile.webp', // Replace with actual path
		name: 'Ana Martínez',
		role: 'Project Manager at TechCorp',
		text: 'Excelente profesional con gran capacidad técnica y habilidades de comunicación. Su trabajo siempre supera las expectativas y demuestra un compromiso excepcional con cada proyecto.',
	},
];

export default function RecommendationsSection() {
	const { t } = useTranslation();
	const theme = useTheme();
	console.log(theme.palette);
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const isTablet = useMediaQuery(theme.breakpoints.down('md'));
	const scrollerRef = useRef<HTMLDivElement>(null);
	const scrollerInnerRef = useRef<HTMLDivElement>(null);

	// Add animation and duplicate content for infinite scroll
	useEffect(() => {
		if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			if (scrollerRef.current && scrollerInnerRef.current) {
				scrollerRef.current.setAttribute('data-animated', 'true');

				const scrollerContent = Array.from(scrollerInnerRef.current.children);
				const contentWidth = scrollerInnerRef.current.scrollWidth;

				// Duplicar contenido hasta llenar el ancho visible más un margen de seguridad
				let duplicatedWidth = 0;
				while (duplicatedWidth < window.innerWidth * 2) {
					scrollerContent.forEach((item) => {
						const duplicatedItem = item.cloneNode(true) as HTMLElement;
						duplicatedItem.setAttribute('aria-hidden', 'true');
						scrollerInnerRef.current?.appendChild(duplicatedItem);
						duplicatedWidth += duplicatedItem.scrollWidth;
					});
				}
			}
		}
	}, []);

	return (
		<Box component='section' sx={{ mt: 8, mb: 8 }}>
			<Typography
				variant='h4'
				fontWeight='bold'
				textAlign='center'
				fontFamily={'monospace'}
			>
				{t('recommendations.title', 'Recomendaciones')}
			</Typography>

			{/* CSS for the scroller - using sx prop for styled-components approach */}
			<Box
				ref={scrollerRef}
				className='scroller'
				data-speed='slow'
				data-direction='left'
				sx={{
					maxWidth: '100%',
					overflow: 'hidden',
					position: 'relative',

					// Mask for fade effect
					'&[data-animated="true"]': {
						overflow: 'hidden',
						WebkitMask:
							'linear-gradient(90deg, transparent, white 10%, white 90%, transparent)',
						mask: 'linear-gradient(90deg, transparent, white 10%, white 90%, transparent)',
					},

					// Animation styles
					'&[data-animated="true"] .scroller__inner': {
						display: 'flex',
						width: 'max-content',
						flexWrap: 'nowrap',
						animation:
							'scroll var(--_animation-duration, 40s) var(--_animation-direction, forwards) linear infinite',
					},

					// Direction control
					'&[data-direction="right"]': {
						'--_animation-direction': 'reverse',
					},
					'&[data-direction="left"]': {
						'--_animation-direction': 'forwards',
					},

					// Speed control
					'&[data-speed="fast"]': {
						'--_animation-duration': '20s',
					},
					'&[data-speed="slow"]': {
						'--_animation-duration': '60s',
					},

					// Keyframes for the animation
					'@keyframes scroll': {
						to: {
							transform: 'translate(calc(-50% - 1rem))',
						},
					},
				}}
			>
				<Box
					ref={scrollerInnerRef}
					className='scroller__inner'
					sx={{
						display: 'flex',
						gap: 4,
						padding: '1rem 0',
					}}
				>
					{/* Recommendation cards */}
					{recommendationsData.map((recommendation, index) => (
						<RecomendarionCard
							key={`${recommendation.id}-${index}`}
							recommendation={recommendation}
						/>
					))}
				</Box>
			</Box>
		</Box>
	);
}
