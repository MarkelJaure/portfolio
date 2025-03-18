import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../styles/theme';
import { Analytics } from '@vercel/analytics/next';
import { I18nProvider } from './I18nProvider';

export const metadata = {
	title: 'Markel Jaureguibehere - Portfolio',
	description: 'Desarrollador Fullstack y Licenciado en Informática.',
	keywords: [
		'Desarrollador Fullstack',
		'React',
		'Next.js',
		'JavaScript',
		'TypeScript',
		'Node.js',
		'Portfolio',
		'Desarrollo Web',
	],
	robots: 'index, follow',
	author: 'Markel Jaureguibehere',
	icons: '/favicon.ico',
	openGraph: {
		title: 'Markel Jaureguibehere - Portfolio',
		description: 'Desarrollador Fullstack y Licenciado en Informática.',
		url: 'https://portfolio-markel-jaureguibeheres-projects.vercel.app/',
		siteName: 'Markel Jaureguibehere - Portfolio',
		images: [
			{
				url: '/profile.webp', // Asegurate de subir esta imagen
				width: 1200,
				height: 630,
				alt: 'Markel Jaureguibehere - Portfolio',
			},
		],
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Markel Jaureguibehere - Portfolio',
		description: 'Desarrollador Fullstack y Licenciado en Informática.',
		images: ['/profile.webp'],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='es'>
			<head>
				<title>{metadata.title}</title>
				<meta name='description' content={metadata.description} />
				<meta name='robots' content={metadata.robots} />
				<meta name='author' content={metadata.author} />
				<link rel='icon' href={metadata.icons} />
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
