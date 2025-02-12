'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../styles/theme';



export default function RootLayout({ children }: { children: React.ReactNode }) {

  const metadata = {
  title: "Markel Jaureguibehere - Portfolio",
  description: "Desarrollador Fullstack especializado en Node.js, React y bases de datos.",
};
  return (
    <html lang="es">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
