'use client';
import { useState, useEffect } from 'react';
import { Container, ThemeProvider, CssBaseline } from '@mui/material';
import HeroSection from '@/components/sections/hero';
import AboutMeSection from '@/components/sections/aboutMe';
import ExperienceSection from '@/components/sections/experience';
import ProyectsSection from '@/components/sections/proyects';
import ContactSection from '@/components/sections/contact';
import TechnologiesSection from '@/components/sections/tecnologies';
import MoreAboutMe from '@/components/sections/moreAboutMe';
import darkTheme from '@/styles/darkTheme';
import theme from '@/styles/theme';
import Navbar from '@/components/Navbar/navbar';
import Footer from '@/components/sections/footer';

export default function PortfolioWireframe() {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem('darkMode') === 'true';
		setDarkMode(savedTheme);
	}, []);

	const toggleDarkMode = () => {
		setDarkMode((prev) => {
			const newTheme = !prev;
			localStorage.setItem('darkMode', JSON.stringify(newTheme));
			return newTheme;
		});
	};
	return (
		<ThemeProvider theme={darkMode ? darkTheme : theme}>
			<CssBaseline />
			<Navbar />
			<Container maxWidth='md' sx={{ py: 4 }}>
				<HeroSection darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
				<AboutMeSection />
				<ExperienceSection />
				<ProyectsSection />
				<TechnologiesSection />
				<MoreAboutMe />
				<ContactSection />
				<Footer />
			</Container>
		</ThemeProvider>
	);
}
