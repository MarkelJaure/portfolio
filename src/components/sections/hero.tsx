import {
	Typography,
	Box,
	Avatar,
	Container,
	IconButton,
	useMediaQuery,
	useTheme,
	Chip,
	Tooltip,
} from '@mui/material';
import {
	GitHub,
	LinkedIn,
	Description,
	LightMode,
	DarkMode,
} from '@mui/icons-material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import TypewriterText from '../TypewiterText/TypewriterText';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';

type InfoType = {
	title: string;
	description: string;
	buttons: {
		label: string;
		icon: React.ReactElement;
		href: string;
		color: 'primary' | 'secondary';
	}[];
};

type HeroSectionProps = {
	toggleDarkMode: () => void;
	darkMode: boolean;
	changeLanguage: (locale: string) => void;
};

const HeroSection = ({
	toggleDarkMode,
	darkMode,
	changeLanguage,
}: HeroSectionProps) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const isMedium = useMediaQuery(theme.breakpoints.down('md'));
	const { t, i18n } = useTranslation();

	const info: InfoType = {
		title: t('hero.name'),
		description: t('hero.description'),
		buttons: [
			{
				label: t('hero.buttons.viewCv'),
				icon: <Description />,
				href: `/cv-${i18n.language}.pdf`,
				color: 'secondary',
			},
			{
				label: 'GitHub',
				icon: <GitHub />,
				href: 'https://github.com/MarkelJaure',
				color: 'primary',
			},
			{
				label: 'LinkedIn',
				icon: <LinkedIn />,
				href: 'https://www.linkedin.com/in/markel-jaureguibehere/',
				color: 'primary',
			},
		],
	};

	return (
		<Box
			id='hero'
			sx={{
				position: 'relative',
				color: 'white',
				py: { xs: 6, md: 8 },
				backgroundImage: 'linear-gradient(135deg, #5B6EF5 0%, #8A4FBD 100%)',
				borderRadius: '16px',
				overflow: 'hidden',
				boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
			}}
		>
			{/* Decorative elements */}
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					opacity: 0.05,
					backgroundImage:
						'radial-gradient(circle at 25% 25%, white 1%, transparent 8%), radial-gradient(circle at 75% 75%, white 1%, transparent 8%)',
					backgroundSize: '60px 60px',
				}}
			/>

			<Container maxWidth='md'>
				<Box
					display='flex'
					flexDirection={isMobile ? 'column' : 'row'}
					alignItems='center'
					justifyContent='space-between'
					gap={isMobile ? 5 : 6}
				>
					<Box
						flexShrink={0}
						sx={{
							position: 'relative',
							'&::after': {
								content: '""',
								position: 'absolute',
								top: -5,
								left: -5,
								right: -5,
								bottom: -5,
								borderRadius: '50%',
								background:
									'linear-gradient(45deg, rgba(255,255,255,0.15), rgba(255,255,255,0))',
								zIndex: -1,
							},
						}}
					>
						<Avatar
							sx={{
								width: isMobile ? 150 : 200,
								height: isMobile ? 150 : 200,
								border: '4px solid rgba(255,255,255,0.8)',
								boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
								transition: 'transform 0.3s ease-in-out',
								'&:hover': {
									transform: 'scale(1.03)',
								},
							}}
						>
							<Image
								src='/profile.jpeg'
								alt='Markel Jaureguibehere'
								width={200}
								height={200}
								style={{ objectFit: 'cover' }}
								loading='eager'
							/>
						</Avatar>
					</Box>

					<Box
						textAlign={isMobile ? 'center' : 'left'}
						flexGrow={1}
						width={isMobile ? '100%' : 'auto'}
						display='flex'
						flexDirection='column'
						sx={{ zIndex: 1 }}
					>
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
						>
							<Typography
								variant={isMobile ? 'h4' : 'h3'}
								fontWeight='bold'
								mb={1}
								sx={{
									letterSpacing: '-0.02em',
									textShadow: '0 2px 10px rgba(0,0,0,0.1)',
								}}
							>
								{info.title}
							</Typography>
						</motion.div>

						<Box sx={{ mb: 2.5 }}>
							<TypewriterText text={info.description} />
						</Box>

						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
						>
							<Box
								display='flex'
								gap={2}
								flexWrap='wrap'
								justifyContent={isMobile ? 'center' : 'flex-start'}
								alignItems='center'
								mb={2.5}
							>
								{/* CV button with text */}
								<Tooltip title={info.buttons[0].label}>
									<IconButton
										href={info.buttons[0].href}
										target='_blank'
										rel='noopener noreferrer'
										aria-label={info.buttons[0].label}
										sx={{
											color: 'white',
											bgcolor: 'rgba(255,255,255,0.1)',
											backdropFilter: 'blur(8px)',
											transition: 'all 0.2s ease-in-out',
											'&:hover': {
												bgcolor: 'rgba(255,255,255,0.2)',
												transform: 'translateY(-2px)',
											},
										}}
									>
										{info.buttons[0].icon}
									</IconButton>
								</Tooltip>

								{/* Social media buttons - icons only */}
								{info.buttons.slice(1).map((button, index) => (
									<Tooltip key={index + 1} title={button.label}>
										<IconButton
											href={button.href}
											target='_blank'
											rel='noopener noreferrer'
											aria-label={button.label}
											sx={{
												color: 'white',
												bgcolor: 'rgba(255,255,255,0.1)',
												backdropFilter: 'blur(8px)',
												transition: 'all 0.2s ease-in-out',
												'&:hover': {
													bgcolor: 'rgba(255,255,255,0.2)',
													transform: 'translateY(-2px)',
												},
											}}
										>
											{button.icon}
										</IconButton>
									</Tooltip>
								))}

								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
										gap: 1,
										ml: isMobile ? 0 : 'auto',
									}}
								>
									<IconButton
										onClick={toggleDarkMode}
										color='inherit'
										sx={{
											bgcolor: 'rgba(255,255,255,0.1)',
											backdropFilter: 'blur(8px)',
											'&:hover': {
												bgcolor: 'rgba(255,255,255,0.2)',
											},
										}}
									>
										{darkMode ? <LightMode /> : <DarkMode />}
									</IconButton>

									<LanguageSwitcher changeLanguage={changeLanguage} />
								</Box>
							</Box>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
						>
							<Chip
								component='a'
								href='https://www.linkedin.com/in/markel-jaureguibehere/'
								target='_blank'
								rel='noopener noreferrer'
								label={
									<Box display='flex' alignItems='center' gap={1}>
										<Box
											position='relative'
											display='flex'
											alignItems='center'
											justifyContent='center'
											width={16}
											height={16}
										>
											<Box
												component={motion.span}
												sx={{
													position: 'absolute',
													width: 12,
													height: 12,
													borderRadius: '50%',
													bgcolor: '#3ddc97',
													opacity: 0.7,
												}}
												animate={{ scale: [1, 1.5, 1] }}
												transition={{
													duration: 1.5,
													repeat: Infinity,
													repeatType: 'loop',
												}}
											/>
											<Box
												sx={{
													position: 'relative',
													width: 8,
													height: 8,
													borderRadius: '50%',
													bgcolor: '#3ddc97',
												}}
											/>
										</Box>
										{t('hero.availableForWork', 'Available for work')}
									</Box>
								}
								clickable
								sx={{
									bgcolor: 'rgba(61, 220, 151, 0.15)',
									color: '#3ddc97',
									borderRadius: '20px',
									backdropFilter: 'blur(8px)',
									'&:hover': {
										bgcolor: 'rgba(61, 220, 151, 0.25)',
										transform: 'translateY(-2px)',
										boxShadow: '0 4px 12px rgba(61, 220, 151, 0.2)',
									},
									fontWeight: 'medium',
									fontSize: '0.75rem',
									height: 28,
									border: '1px solid',
									borderColor: 'rgba(61, 220, 151, 0.3)',
									transition: 'all 0.2s ease-in-out',
									alignSelf: isMobile ? 'center' : 'flex-start',
									boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
								}}
							/>
						</motion.div>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default HeroSection;
