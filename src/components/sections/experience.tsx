import React, { useState } from 'react';
import {
	Typography,
	Box,
	IconButton,
	Collapse,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineOppositeContent,
} from '@mui/lab';
import { WorkflowIcon as Work, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import TranslatedTypography from '../TranslatedTypography/TranslatedTypography';

const scrollToProject = (e: React.MouseEvent, projectId: string) => {
	e.preventDefault();
	const element = document.getElementById(projectId);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth', block: 'center' });
	}
};

const ExperienceSection = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
		{}
	);
	const { t } = useTranslation();

	const toggleExpand = (index: number) => {
		setExpandedItems((prev) => ({
			...prev,
			[index]: !prev[index],
		}));
	};

	const experiences = [
		{
			title: !isMobile
				? t('experience.items.camad.titleExtended')
				: t('experience.items.camad.title'),
			period: t('experience.items.camad.period'),
			role: t('experience.items.camad.role'),
			description: [
				<TranslatedTypography
					key='1'
					i18nKey='experience.items.camad.description.1'
					component={'li'}
					variant='body2'
					href='#mic'
					onClick={(e) => scrollToProject(e, 'mic')}
				/>,
				<TranslatedTypography
					key='2'
					i18nKey='experience.items.camad.description.2'
					component={'li'}
					variant='body2'
				/>,
				<TranslatedTypography
					key='3'
					i18nKey='experience.items.camad.description.3'
					component={'li'}
					variant='body2'
				/>,
				<TranslatedTypography
					key='4'
					i18nKey='experience.items.camad.description.4'
					component={'li'}
					variant='body2'
				/>,
				<TranslatedTypography
					key='5'
					i18nKey='experience.items.camad.description.5'
					component={'li'}
					variant='body2'
				/>,
				<TranslatedTypography
					key='6'
					i18nKey='experience.items.camad.description.6'
					component={'li'}
					variant='body2'
				/>,
			],
		},
		{
			title: !isMobile
				? t('experience.items.anppv.titleExtended')
				: t('experience.items.anppv.title'),
			period: t('experience.items.anppv.period'),
			role: t('experience.items.anppv.role'),
			description: [
				<TranslatedTypography
					key='1'
					i18nKey='experience.items.anppv.description.1'
					component={'li'}
					variant='body2'
					href='#anp'
					onClick={(e) => scrollToProject(e, 'anp')}
				/>,
				<TranslatedTypography
					key='2'
					i18nKey='experience.items.anppv.description.2'
					component={'li'}
					variant='body2'
				/>,
				<TranslatedTypography
					key='3'
					i18nKey='experience.items.anppv.description.3'
					component={'li'}
					variant='body2'
				/>,
			],
		},
	];

	return (
		<Box id='experience' my={4}>
			<Typography
				variant='h4'
				fontWeight='bold'
				textAlign='center'
				mb={4}
				fontFamily={'monospace'}
			>
				{t('experience.title')}
			</Typography>
			<Timeline position='right'>
				{experiences.map((exp, index) => (
					<TimelineItem key={index}>
						<TimelineOppositeContent sx={{ flex: 0 }}></TimelineOppositeContent>
						<TimelineSeparator sx={{ paddingLeft: 0 }}>
							<TimelineDot color='primary'>
								<Work size={20} />
							</TimelineDot>
							{index !== experiences.length - 1 && <TimelineConnector />}
						</TimelineSeparator>
						<TimelineContent>
							<Box
								sx={{
									p: 2,
									mb: 2,
									borderLeft: '2px solid',
									borderColor: 'highlight.secondary',
									backgroundColor: 'background.paper',
									boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
									borderRadius: 2,
									transition: 'all 0.3s ease',
									'&:hover': {
										transform: 'translateY(-5px)',
										boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
									},
								}}
							>
								<Typography
									variant='h6'
									component='h3'
									color='highlight.secondary'
								>
									{exp.title}
								</Typography>
								<Typography
									variant='subtitle1'
									color='text.secondary'
									fontWeight='bold'
								>
									{exp.role}
								</Typography>
								<Typography variant='body2' color='text.secondary' mb={1}>
									{exp.period}
								</Typography>
								{isMobile ? (
									<>
										<Box display='flex' justifyContent='center'>
											<IconButton
												onClick={() => toggleExpand(index)}
												size='small'
											>
												{expandedItems[index] ? <ChevronUp /> : <ChevronDown />}
											</IconButton>
										</Box>
										<Collapse in={expandedItems[index]}>
											<Box component='ul' sx={{ pl: 2, mt: 1 }}>
												{exp.description}
											</Box>
										</Collapse>
									</>
								) : (
									<Box component='ul' sx={{ pl: 2, mt: 1 }}>
										{exp.description}
									</Box>
								)}
							</Box>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		</Box>
	);
};

export default ExperienceSection;
