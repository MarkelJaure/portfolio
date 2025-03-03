import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TranslatedTypography from '../TranslatedTypography/TranslatedTypography';

const AboutMeSection = () => {
	const { t } = useTranslation();

	const aboutMe = {
		title: t('aboutMe.title'),
		description: [
			<TranslatedTypography
				key='1'
				i18nKey='aboutMe.description1'
				textAlign='left'
				paddingInline={2}
				mt={2}
			/>,
			<TranslatedTypography
				key='2'
				i18nKey='aboutMe.description2'
				textAlign='left'
				paddingInline={2}
				mt={2}
			/>,
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
