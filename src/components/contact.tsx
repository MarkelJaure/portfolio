import { Typography, Box, Link, Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const contact = {
	title: 'Contacto',
	email: 'markeljaure2000@gmail.com',
	repoUrl: 'https://github.com/MarkelJaure/portfolio', // Reemplaza con la URL real de tu repositorio
};

const ContactSection = () => {
	return (
		<>
			<Box id='contact' my={4} textAlign='center'>
				<Typography
					variant='h4'
					fontWeight='bold'
					fontFamily={'Consolas, monospace'}
				>
					{contact.title}
				</Typography>
				<Typography variant='body1' mt={2} fontFamily={'Consolas, monospace'}>
					¡Hablemos! Escríbeme a{' '}
					<Link
						href={`mailto:${contact.email}`}
						color='primary'
						sx={{ textDecoration: 'none' }}
					>
						{contact.email}
					</Link>
				</Typography>
			</Box>
			<Box component='footer' py={3} bgcolor='background.paper'>
				<Container maxWidth='sm'>
					<Typography variant='body2' color='text.secondary' align='center'>
						© {new Date().getFullYear()} Markel Jaureguibehere
					</Typography>

					<Link
						href={contact.repoUrl}
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
							Ver código fuente
						</Typography>
					</Link>
				</Container>
			</Box>
		</>
	);
};

export default ContactSection;
