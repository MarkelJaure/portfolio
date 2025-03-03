import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#1f6feb',
		},
		secondary: {
			main: '#3ddc97',
			light: '#434343',
		},
		background: {
			default: '#0d1117',
			paper: '#161b22',
		},
		text: {
			primary: '#eaeaea',
			secondary: '#b0b0b0',
		},
		error: {
			main: '#ff4c4c',
		},
		success: {
			main: '#4caf50',
			light: '#3ddc97',
		},
		highlight: {
			primary: '#FF9800',
			secondary: '#FF9800',
		},
	},
	typography: {
		fontFamily: 'Inter, Roboto, Arial, sans-serif',
	},
});

export default darkTheme;
