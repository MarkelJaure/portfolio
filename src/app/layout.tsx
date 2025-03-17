'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../styles/theme';
import { Analytics } from '@vercel/analytics/next';
import { I18nProvider } from './I18nProvider';

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
				<meta name='robots' content='index, follow' />
				<link rel='icon' href='/favicon.ico' />
				<link
					rel='canonical'
					href='https://portfolio-markel-jaureguibeheres-projects.vercel.app/'
				/>
			</head>
			<body>
				<I18nProvider>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<Analytics />
						{children}
					</ThemeProvider>
				</I18nProvider>
			</body>
		</html>
	);
}
