import { Typography, Box, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
	const { t } = useTranslation();

	const contact = {
		title: t('contact.title'),
		email: 'markeljaure2000@gmail.com',
	};

	return (
		<Box id='contact' my={4} textAlign='center'>
			<Typography
				variant='h4'
				fontWeight='bold'
				fontFamily={'Consolas, monospace'}
			>
				{contact.title}
			</Typography>
			<Typography variant='body1' mt={2} fontFamily={'Consolas, monospace'}>
				{t('contact.greeting')}{' '}
				<Link
					href={`mailto:${contact.email}`}
					color='primary'
					sx={{ textDecoration: 'none' }}
				>
					{contact.email}
				</Link>
			</Typography>
		</Box>
	);
};

export default ContactSection;
