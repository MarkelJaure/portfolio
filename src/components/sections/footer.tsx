import { Typography, Box, Link, Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const data = {
	name: 'Markel Jaureguibehere',
	repoUrl: 'https://github.com/MarkelJaure/portfolio', // Reemplaza con la URL real de tu repositorio
};
const Footer = () => {
	return (
		<Box component='footer' py={3} bgcolor='background.paper'>
			<Container maxWidth='sm'>
				<Typography variant='body2' color='text.secondary' align='center'>
					© {new Date().getFullYear()} {data.name}
				</Typography>

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
						Ver código fuente
					</Typography>
				</Link>
			</Container>
		</Box>
	);
};

export default Footer;
