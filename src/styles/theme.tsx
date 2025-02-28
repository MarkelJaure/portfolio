import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		highlight: Palette['text'];
	}
	interface PaletteOptions {
		highlight?: PaletteOptions['text'];
	}
}
const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#1565c0',
		},
		secondary: {
			main: '#ff6b81',
			light: '#f5f5f5',
		},
		background: {
			default: '#f5f5f5',
			paper: '#ffffff',
		},
		text: {
			primary: '#333333',
			secondary: '#555555',
		},
		error: {
			main: '#ff5252',
		},
		success: {
			main: '#43a047',
		},
		highlight: {
			primary: '#FF5722',
			secondary: '#1565c0',
		},
	},

	typography: {
		fontFamily: 'Inter, Roboto, Arial, sans-serif',
	},
});

export default lightTheme;
