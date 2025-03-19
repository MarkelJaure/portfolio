import { useEffect, useState } from 'react';
import { Typography, Box, Container, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTranslation } from 'react-i18next';

const konamiCode = [
	'ArrowUp',
	'ArrowUp',
	'ArrowDown',
	'ArrowDown',
	'ArrowLeft',
	'ArrowRight',
	'ArrowLeft',
	'ArrowRight',
];
let inputSequence: any[] = [];

const data = {
	name: 'Markel Jaureguibehere',
	repoUrl: 'https://github.com/MarkelJaure/portfolio',
};

const Footer = () => {
	const [konamiMode, setKonamiMode] = useState(false);
	const [flashColor, setFlashColor] = useState('background.paper'); // Estado para controlar el color del fondo
	const { t } = useTranslation();

	useEffect(() => {
		const handleKeyDown = (event: { key: any }) => {
			inputSequence.push(event.key);

			// Verifica si la tecla es la correcta en la secuencia
			const correctKey = konamiCode[inputSequence.length - 1] === event.key;

			if (correctKey) {
				setFlashColor('green'); // Flash verde si es correcta la tecla
			} else {
				setFlashColor('red'); // Flash rojo si hay un error
				inputSequence = []; // Reinicia la secuencia si hay error
			}

			// Si se completó la secuencia correctamente
			if (inputSequence.toString() === konamiCode.toString()) {
				setKonamiMode(true);
				setFlashColor('green'); // Flash verde al completar el Konami code
				inputSequence = []; // Reinicia la secuencia después de activarse el modo
			}

			// Si la longitud del inputSequence excede el código, lo limpia
			if (inputSequence.length > konamiCode.length) inputSequence.shift();
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, []);

	// Función para restaurar el color después del flash
	useEffect(() => {
		if (flashColor !== 'background.paper') {
			setTimeout(() => {
				setFlashColor('background.paper'); // Restaura el color a transparente después de un tiempo
			}, 200); // Duración del flash (200ms)
		}
	}, [flashColor]);

	return (
		<Box
			component='footer'
			py={3}
			bgcolor={'background.paper'}
			color={'text.secondary'}
			textAlign='center'
			sx={{
				transition: '0.3s',
				backgroundColor: konamiMode ? 'background.paper' : flashColor, // Aplica el color de flash
				animation: flashColor ? 'flashAnimation 0.2s' : 'none', // Aplica la animación
			}}
		>
			<Container maxWidth='sm'>
				<Typography
					variant='body1'
					sx={{
						fontWeight: konamiMode ? 'bold' : 'normal',
						fontSize: konamiMode ? '1.2rem' : '1rem',
					}}
					color={konamiMode ? 'highlight.primary' : 'text.secondary'}
				>
					{konamiMode
						? 'Hola Singletoneta!'
						: 'Hecho con código y mucho mate 🧉'}
				</Typography>
				{konamiMode ? (
					<Typography variant='body1' color='text.secondary'>
						{'🎮 Sale ese 🚀'}
					</Typography>
				) : (
					<Link
						href={data.repoUrl}
						mt={1}
						gap={1}
						target='_blank'
						rel='noopener noreferrer'
						color='inherit'
						display='flex'
						justifyContent='center'
						alignItems={'center'}
						flexDirection={'row'}
					>
						<GitHubIcon />
						<Typography variant='body2' color='text.secondary'>
							{t('footer.source')}
						</Typography>
					</Link>
				)}
			</Container>
		</Box>
	);
};

export default Footer;
