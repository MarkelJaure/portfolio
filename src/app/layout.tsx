// app/layout.tsx (Servidor)
export const metadata = {
	canonical: 'https://portfolio-markel-jaureguibeheres-projects.vercel.app',
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
	openGraph: {
		type: 'website',
		locale: 'es_AR',
		url: 'https://portfolio-markel-jaureguibeheres-projects.vercel.app',
		site_name: 'Markel Jaureguibehere - Portfolio',
		images: [
			{
				url: 'https://portfolio-markel-jaureguibeheres-projects.vercel.app/profile.webp',
				width: 390,
				height: 394,
				alt: 'Markel Jaureguibehere',
			},
		],
	},
	robots: 'index, follow',
	author: 'Markel Jaureguibehere',
	icons: '/favicon.ico',
};

import RootLayout from './RootLayout';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='es'>
			<body>
				<RootLayout>{children}</RootLayout>
			</body>
		</html>
	);
}
