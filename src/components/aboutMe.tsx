import { Typography, Box } from '@mui/material';
import Flag from 'react-world-flags';

const aboutMe = {
	title: 'Sobre mí',
	description: [
		<Typography key='1' variant='body1' textAlign='center' mt={2}>
			Soy un{' '}
			<Typography
				component='span'
				fontFamily={'Consolas, monospace'}
				sx={{ color: 'highlight.primary' }}
			>
				Desarrollador de Software con más de 4 años de experiencia
			</Typography>
			, originario de <strong>Puerto Madryn, Argentina</strong>.
			<Flag code='AR' style={{ width: 20, height: 15, marginLeft: 5 }} />
		</Typography>,
		<Typography key='2' variant='body1' textAlign='center' mt={2}>
			Mi pasión por el desarrollo web y las aplicaciones móviles me ha llevado a
			especializarme tanto en el <strong>Frontend</strong>, creando interfaces
			funcionales y atractivas, como en el <strong>Backend</strong>, buscando
			siempre soluciones eficientes y escalables. Me gradué como{' '}
			<strong>Licenciado en Informática</strong> en la{' '}
			<strong>Universidad Nacional de la Patagonia San Juan Bosco</strong> y
			tengo amplia experiencia trabajando principalmente con Node.js, React y
			PostgreSQL.
		</Typography>,
		<Typography key='3' variant='body1' textAlign='center' mt={2}>
			Actualmente, estoy <strong>disponible para trabajar</strong>, con muchas
			ganas de seguir aprendiendo y crecer profesionalmente.
		</Typography>,
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
