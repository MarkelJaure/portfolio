'use client';
import { useState, useEffect } from 'react';
import {
	Container,
	ThemeProvider,
	CssBaseline,
	Box,
	IconButton,
	useTheme,
	useMediaQuery,
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // Importamos el icono de flecha hacia arriba
import HeroSection from '@/components/sections/hero';
import AboutMeSection from '@/components/sections/aboutMe';
import ExperienceSection from '@/components/sections/experience';
import ProyectsSection from '@/components/sections/projects';
import ContactSection from '@/components/sections/contact';
import TechnologiesSection from '@/components/sections/tecnologies';
import MoreAboutMe from '@/components/sections/moreAboutMe';
import darkTheme from '@/styles/darkTheme';
import lightTheme from '@/styles/theme';
import Navbar from '@/components/Navbar/navbar';
import Footer from '@/components/sections/footer';
import { useTranslation } from 'react-i18next';
import { CSSProperties } from 'react';
import { motion } from 'framer-motion';

export default function PortfolioWireframe() {
	const [darkMode, setDarkMode] = useState(true);
	const { i18n } = useTranslation();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem('darkMode');
		if (savedTheme !== null) {
			setDarkMode(savedTheme === 'true');
		}

		// Función para mostrar el botón de scroll hacia arriba
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setShowScrollTop(true); // Mostrar el botón si el scroll es mayor a 300px
			} else {
				setShowScrollTop(false); // Ocultar el botón si no
			}
		};

		window.addEventListener('scroll', handleScroll);

		// Limpiar el evento cuando el componente se desmonte
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Función para hacer scroll hacia arriba
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const toggleDarkMode = () => {
		setDarkMode((prev) => {
			const newTheme = !prev;
			localStorage.setItem('darkMode', JSON.stringify(newTheme));
			return newTheme;
		});
	};

	const changeLanguage = (locale: string) => {
		i18n.changeLanguage(locale);
	};

	// Estilos para el fondo con patrón y degradado
	const backgroundStyle: CSSProperties = {
		backgroundColor: 'background.default',
		backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%238A4FBD' fillOpacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
		position: 'relative',
		minHeight: '100vh',
	};

	// Estilos para el degradado que cubre el patrón en el centro
	const overlayStyle: CSSProperties = {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		background: darkMode
			? `linear-gradient(90deg, rgba(13,17,23,0.5) 0%, rgba(13,17,23,1) 15%, rgba(13,17,23,1) 85%, rgba(13,17,23,0.5) 100%)`
			: `linear-gradient(90deg, rgba(245,245,245,0.5) 0%, rgba(245,245,245,1) 15%, rgba(245,245,245,1) 85%, rgba(245,245,245,0.5) 100%)`,
		zIndex: 0,
	};

	// Estilos para el contenedor que mantiene el contenido por encima del degradado
	const contentContainerStyle: CSSProperties = {
		position: 'relative',
		zIndex: 1,
	};

	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<Box sx={backgroundStyle}>
				<Box sx={overlayStyle}></Box>
				<Box sx={contentContainerStyle}>
					<CssBaseline />
					<Navbar />
					<Container maxWidth='md' sx={{ py: 4 }}>
						<HeroSection
							darkMode={darkMode}
							toggleDarkMode={toggleDarkMode}
							changeLanguage={changeLanguage}
						/>
						<AboutMeSection />
						<ProyectsSection />
						<ExperienceSection />
						<TechnologiesSection />
						<MoreAboutMe />
						<ContactSection />
						<Footer />
						{showScrollTop && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
							>
								<IconButton
									onClick={scrollToTop}
									sx={{
										maxWidth: 'md',
										position: 'fixed',
										bottom: isMobile ? 20 : 40,
										right: {
											xs: 20,
											lg: `calc((100% - min(100%, ${theme.breakpoints.values.md}px)) / 2.5 )`,
										},
										backgroundColor: darkMode ? '#4e4e4e' : '#aaaaaa',
										'&:hover': {
											backgroundColor: darkMode ? '#333' : '#e0e0e0',
										},
										borderRadius: '50%',
										zIndex: 9999,
									}}
								>
									<ArrowUpwardIcon />
								</IconButton>
							</motion.div>
						)}
					</Container>
				</Box>
			</Box>
		</ThemeProvider>
	);
}
