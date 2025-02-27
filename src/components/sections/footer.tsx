import { Typography, Box, Link, Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTranslation } from 'react-i18next';

const data = {
	name: 'Markel Jaureguibehere',
	repoUrl: 'https://github.com/MarkelJaure/portfolio',
};
const Footer = () => {
	const { t } = useTranslation();
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
						{t('footer.source')}
					</Typography>
				</Link>
			</Container>
		</Box>
	);
};

export default Footer;
