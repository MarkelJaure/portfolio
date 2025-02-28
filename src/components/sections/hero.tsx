import {
	Typography,
	Button,
	Box,
	Avatar,
	Container,
	IconButton,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import {
	GitHub,
	LinkedIn,
	Description,
	LightMode,
	DarkMode,
} from '@mui/icons-material';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import TypewriterText from '../TypewiterText/TypewriterText';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';
import { changeLanguage } from 'i18next';

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

const HeroSection = ({ toggleDarkMode, darkMode }: HeroSectionProps) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
				bgcolor: 'primary.main',
				color: 'white',
				py: 8,
				backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				borderRadius: '10px',
			}}
		>
			<Container maxWidth='md'>
				<Box
					display='flex'
					flexDirection={isMobile ? 'column' : 'row'}
					alignItems='center'
					justifyContent='center'
					gap={4}
				>
					<Box flexShrink={0}>
						<Avatar
							sx={{
								width: isMobile ? 150 : 200,
								height: isMobile ? 150 : 200,
								border: '4px solid white',
								boxShadow: '0 0 20px rgba(0,0,0,0.2)',
							}}
						>
							<Image
								src='/profile.jpeg'
								alt='Markel Jaureguibehere'
								width={200}
								height={200}
								style={{ objectFit: 'cover' }}
							/>
						</Avatar>
					</Box>
					<Box
						textAlign={isMobile ? 'center' : 'left'}
						flexGrow={1}
						width={isMobile ? '100%' : 'auto'}
						display='flex'
						flexDirection='column'
					>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, ease: 'easeOut' }}
						>
							<Typography
								variant={isMobile ? 'h4' : 'h3'}
								fontWeight='bold'
								mb={1}
							>
								{info.title}
							</Typography>
						</motion.div>

						<TypewriterText text={info.description} />

						<Box
							display='flex'
							gap={2}
							flexWrap='wrap'
							justifyContent={isMobile ? 'center' : 'flex-start'}
							mt={3}
						>
							<AnimatePresence>
								{info.buttons.map((button, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
									>
										<Button
											variant='contained'
											color={button.color}
											startIcon={button.icon}
											href={button.href}
											target='_blank'
											rel='noopener noreferrer'
										>
											{button.label}
										</Button>
									</motion.div>
								))}
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: 1.8 }}
								>
									<IconButton onClick={toggleDarkMode} color='inherit'>
										{darkMode ? <LightMode /> : <DarkMode />}
									</IconButton>
								</motion.div>
								<LanguageSwitcher changeLanguage={changeLanguage} />
							</AnimatePresence>
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default HeroSection;
