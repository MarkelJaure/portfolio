import { Box, Typography, Grid } from '@mui/material';

const moreAboutMe = {
	title: 'Más sobre mí',
	description: [
		<Typography key='1' variant='body1' align='center' mt={2}>
			Durante gran parte de mi vida he estado involucrado en el{' '}
			<strong>Handball</strong> y <strong>Beach Handball</strong> como jugador.
			<br />
			Por ello, cuento con{' '}
			<Typography
				component='span'
				fontFamily={'Consolas, monospace'}
				sx={{ color: 'highlight.primary' }}
			>
				más de 5 años de experiencia como coordinador y entrenador
			</Typography>{' '}
			de todas las categorías del club <strong>J. L. Grilli</strong> en el área
			de <strong>Beach Handball</strong> durante las temporadas de verano.
		</Typography>,
	],
	videos: ['/beach2.mp4', '/beach.mp4', '/beach3.mp4'],
};

const MoreAboutMe = () => {
	return (
		<Box id='more-about' my={4} textAlign='center'>
			<Typography
				variant='h4'
				fontWeight='bold'
				fontFamily={'Consolas, monospace'}
			>
				{moreAboutMe.title}
			</Typography>

			{moreAboutMe.description.map((text, index) => (
				<Box key={index} textAlign='left'>
					{text}
				</Box>
			))}

			<Grid container spacing={2} justifyContent='center' mt={3}>
				{moreAboutMe.videos.map((video, index) => (
					<Grid item key={index} xs={12} sm={4}>
						<Box display='flex' justifyContent='center'>
							<video
								src={video}
								width='100%'
								style={{ maxHeight: '500px', borderRadius: '8px' }}
								autoPlay
								muted
								loop
								playsInline
							/>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default MoreAboutMe;
