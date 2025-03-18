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

	// Detecta la sección actual
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const visibleSection = entries.find((entry) => entry.isIntersecting);
				if (visibleSection) setActiveSection(visibleSection.target.id);
			},
			{ threshold: 0.35 }
		);

		sections.forEach(({ id }) => {
			const section = document.getElementById(id);
			if (section) observer.observe(section);
		});

		return () => observer.disconnect();
	});

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
