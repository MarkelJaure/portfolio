import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Markel Jaureguibehere - Portfolio</title>
				<meta
					name='description'
					content='Desarrollador Fullstack y Licenciado en Informática.'
				/>
				<link rel='icon' href='/favicon.ico' />

				<meta property='og:title' content='Markel Jaureguibehere - Portfolio' />
				<meta
					property='og:description'
					content='Desarrollador Fullstack y Licenciado en Informática.'
				/>
				<meta property='og:image' content='/profile.webp' />
				<meta
					property='og:url'
					content='https://portfolio-markel-jaureguibeheres-projects.vercel.app/'
				/>
				<meta property='og:type' content='website' />

				<meta name='twitter:card' content='summary_large_image' />
				<meta
					name='twitter:title'
					content='Markel Jaureguibehere - Portfolio'
				/>
				<meta
					name='twitter:description'
					content='Desarrollador Fullstack y Licenciado en Informática.'
				/>
				<meta name='twitter:image' content='/profile.webp' />
				<meta name='twitter:site' content='@MarkelTee' />

				<meta name='robots' content='index, follow' />
				<meta name='author' content='Markel Jaureguibehere' />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
