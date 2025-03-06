import { Box, Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TranslatedTypography from '../TranslatedTypography/TranslatedTypography';

const MoreAboutMe = () => {
	const { t } = useTranslation();

	const moreAboutMe = {
		title: t('moreAboutMe.title'),
		description: [
			<TranslatedTypography
				key='1'
				i18nKey='moreAboutMe.description'
				textAlign='center'
				mt={2}
			/>,
		],
		videos: ['/beach2.webm', '/beach.webm', '/beach3.webm'],
	};
	return (
		<Box id='more-about' my={4} textAlign='center'>
			<Typography variant='h4' fontWeight='bold' fontFamily={'monospace'}>
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
