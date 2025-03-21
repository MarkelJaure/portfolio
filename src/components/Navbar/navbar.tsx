'use client';
import { useState, useEffect } from 'react';
import {
	Button,
	Box,
	AppBar,
	Toolbar,
	IconButton,
	useTheme,
	useMediaQuery,
	alpha,
} from '@mui/material';
import { Home, Work, Code, Mail, LaptopChromebook } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const [opacity, setOpacity] = useState(1);
	const [activeSection, setActiveSection] = useState<string | null>(null);
	const { t } = useTranslation();

	const sections = [
		{ id: 'hero', title: t('hero.title'), icon: <Home /> },
		{ id: 'projects', title: t('projects.title'), icon: <Code /> },
		{ id: 'experience', title: t('experience.title'), icon: <Work /> },
		{
			id: 'technologies',
			title: t('technologies.title'),
			icon: <LaptopChromebook />,
		},
		{ id: 'contact', title: t('contact.title'), icon: <Mail /> },
	];

	useEffect(() => {
		const handleScroll = () => {
			setOpacity(window.scrollY > 50 ? 0.7 : 1);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleScrollToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
			const sectionTop =
				section.getBoundingClientRect().top +
				window.scrollY -
				navbarHeight -
				10;

			window.scrollTo({ top: sectionTop, behavior: 'smooth' });
		}
	};

	// Detecta la sección actual con mayor porcentaje de visibilidad
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				// Encontrar la sección con mayor porcentaje visible
				let maxVisibility = 0;
				let activeSectionId: string | null = null;

				entries.forEach((entry) => {
					const visiblePercentage = (entry.intersectionRatio || 0) * 100;

					// Si es más visible que la sección activa actual, actualizamos
					if (visiblePercentage > maxVisibility) {
						maxVisibility = visiblePercentage;
						activeSectionId = entry.target.id;
					}
				});

				// Si no hay sección visible, mantenemos la última activa
				if (activeSectionId || activeSection) {
					setActiveSection(activeSectionId || activeSection);
				}
			},
			{ threshold: Array.from({ length: 101 }, (_, i) => i / 100) } // Umbrales de visibilidad de 0 a 1
		);

		sections.forEach(({ id }) => {
			const section = document.getElementById(id);
			if (section) observer.observe(section);
		});

		return () => observer.disconnect();
	}, [activeSection]);

	return (
		<AppBar
			position='sticky'
			sx={{
				backgroundColor: alpha(theme.palette.primary.main, opacity),
				transition: 'all 0.3s ease',
				backdropFilter: 'blur(4px)',
			}}
		>
			<Toolbar sx={{ justifyContent: 'center' }}>
				<Box display='flex' gap={2}>
					{sections.map(({ id, title, icon }) => {
						const isActive = activeSection === id;

						return (
							<Button
								key={id}
								onClick={() => handleScrollToSection(id)}
								color='inherit'
								sx={{
									position: 'relative',
									fontWeight: 'bold',
									fontFamily: '"Roboto", sans-serif', // Volver a la fuente anterior
									'&:hover::after': {
										content: '""',
										position: 'absolute',
										width: '100%',
										height: '2px',
										backgroundColor: 'white',
										bottom: -4,
										left: 0,
										transform: 'scaleX(1)',
										transition: 'transform 0.3s ease',
									},
									'&::after': {
										content: '""',
										position: 'absolute',
										width: '100%',
										height: '2px',
										backgroundColor: 'white',
										bottom: -4,
										left: 0,
										transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
										transition: 'transform 0.3s ease',
									},
									// Alternativa para resaltar sin cambiar el color
									'&.active': {
										textShadow: isActive ? `0 0 10px #f5f5f5` : 'none',
									},
								}}
								className={isActive ? 'active' : ''}
							>
								{isMobile ? (
									<IconButton color='inherit' aria-label={title}>
										{icon}
									</IconButton>
								) : (
									title
								)}
							</Button>
						);
					})}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
