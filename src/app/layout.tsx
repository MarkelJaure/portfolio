'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../styles/theme';
import { Analytics } from '@vercel/analytics/next';
import Background from '@/components/Background';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const metadata = {
		title: 'Markel Jaureguibehere - Portfolio',
		description: 'Desarrollador Fullstack y Licenciado en Informática.',
	};
	return (
		<html lang='es'>
			<head>
				<title>{metadata.title}</title>
				<meta name='description' content={metadata.description} />
				<link rel='icon' href='/favicon.ico' />
			</head>
			<body>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Analytics />
					{/* <Background /> Aquí estás añadiendo el fondo animado */}
					<div style={{ position: 'relative', zIndex: 10 }}>{children}</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
