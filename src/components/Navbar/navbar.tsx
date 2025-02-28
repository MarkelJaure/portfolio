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
	const { t } = useTranslation();

	const sections = [
		{ id: 'hero', title: t('hero.title'), icon: <Home /> },
		{ id: 'experience', title: t('experience.title'), icon: <Work /> },
		{ id: 'projects', title: t('projects.title'), icon: <Code /> },
		{
			id: 'technologies',
			title: t('technologies.title'),
			icon: <LaptopChromebook />,
		},
		{ id: 'contact', title: t('contact.title'), icon: <Mail /> },
	];

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			setOpacity(scrollY > 50 ? 0.7 : 1);
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

			window.scrollTo({
				top: sectionTop,
				behavior: 'smooth',
			});
		}
	};

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
					{sections.map((section) => (
						<Button
							key={section.id}
							onClick={() => handleScrollToSection(section.id)}
							color='inherit'
							sx={{ textDecoration: 'none', fontWeight: 'bold' }}
						>
							{isMobile ? (
								<IconButton color='inherit' aria-label={section.title}>
									{section.icon}
								</IconButton>
							) : (
								section.title
							)}
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
