import { Box, Typography, Grid } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';

const MoreAboutMe = () => {
	const { t } = useTranslation();

	const moreAboutMe = {
		title: t('moreAboutMe.title'),
		description: [
			<Typography key='1' variant='body1' align='center' mt={2}>
				<Trans
					i18nKey='moreAboutMe.description'
					components={{
						highlight: (
							<Typography
								component='span'
								sx={{ color: 'highlight.primary' }}
							/>
						),
						strong: <strong />,
					}}
				/>
			</Typography>,
		],
		videos: ['/beach2.mp4', '/beach.mp4', '/beach3.mp4'],
	};
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
