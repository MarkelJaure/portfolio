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
	const { t } = useTranslation();

	useEffect(() => {
		const handleKeyDown = (event: { key: any }) => {
			inputSequence.push(event.key);
			console.log('inputSequence', inputSequence);
			if (inputSequence.toString().includes(konamiCode.toString())) {
				setKonamiMode(true);
				inputSequence = [];
			}
			if (inputSequence.length > konamiCode.length) inputSequence.shift();
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, []);

	return (
		<Box
			component='footer'
			py={3}
			bgcolor={'background.paper'}
			color={'text.secondary'}
			textAlign='center'
			sx={{ transition: '0.3s' }}
		>
			<Container maxWidth='sm'>
				<Typography
					variant='body2'
					sx={{
						fontWeight: konamiMode ? 'bold' : 'normal',
						fontSize: konamiMode ? '1.2rem' : '1rem',
					}}
					color={konamiMode ? 'highlight.primary' : 'text.secondary'}
				>
					{konamiMode
						? 'Hola singletoneta!'
						: 'Hecho con código y mucho mate 🧉'}
				</Typography>
				{konamiMode ? (
					<Typography variant='body2' color='text.secondary'>
						{'Ustedes no me roben el codigo'}
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
