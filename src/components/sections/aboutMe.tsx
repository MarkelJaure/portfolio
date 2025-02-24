import { Typography, Box } from '@mui/material';
import Flag from 'react-world-flags';

const aboutMe = {
	title: 'Sobre mí',
	description: [
		<Typography key='1' variant='body1' textAlign='center' mt={2}>
			<Typography component='span' sx={{ color: 'highlight.primary' }}>
				Desarrollador de Software con más de 4 años de experiencia
			</Typography>
			, originario de <strong>Puerto Madryn, Argentina</strong>
			<Flag code='AR' style={{ width: 20, height: 15, marginInline: 5 }} />.
			Apasionado por las nuevas tecnologias y el desarrollo tanto web como
			movil.
		</Typography>,
		<Typography key='2' variant='body1' textAlign='center' mt={2}>
			<Typography component='span' sx={{ color: 'highlight.primary' }}>
				Graduado como <strong>Licenciado en Informática</strong>
			</Typography>{' '}
			en la <strong>Universidad Nacional de la Patagonia San Juan Bosco</strong>{' '}
			y con amplia experiencia trabajando principalmente con Node.js, React y
			PostgreSQL. Actualmente <strong>disponible para trabajar</strong>,
			motivado de seguir aprendiendo y crecer profesionalmente.
		</Typography>,
		<Typography key='3' variant='body1' textAlign='center' mt={2}></Typography>,
	],
};

const AboutMeSection = () => {
	return (
		<Box id='about' my={6}>
			<Typography
				variant='h4'
				textAlign='center'
				fontWeight='bold'
				fontFamily={'Consolas, monospace'}
			>
				{aboutMe.title}
			</Typography>

			{aboutMe.description.map((element, index) => (
				<Box key={index} display='flex' alignItems='center'>
					{element}
				</Box>
			))}
		</Box>
	);
};

export default AboutMeSection;
