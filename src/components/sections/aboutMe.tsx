import { Typography, Box } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';

const AboutMeSection = () => {
	const { t } = useTranslation();

	const aboutMe = {
		title: t('aboutMe.title'),
		description: [
			<Typography key='1' variant='body1' textAlign='center' mt={2}>
				<Trans
					i18nKey='aboutMe.description1'
					components={{
						highlight: (
							<Typography
								component='span'
								sx={{ color: 'highlight.primary' }}
							/>
						),
						strong: <strong />,
						flag: (
							<Flag
								code='AR'
								style={{ width: 20, height: 15, marginInline: 5 }}
							/>
						),
					}}
				/>
			</Typography>,
			<Typography key='2' variant='body1' textAlign='center' mt={2}>
				<Trans
					i18nKey='aboutMe.description2'
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
	};

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
