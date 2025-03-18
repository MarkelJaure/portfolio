// app/RootLayout.tsx (Cliente)
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
	return (
		<I18nProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Analytics />
				{children}
			</ThemeProvider>
		</I18nProvider>
	);
}
