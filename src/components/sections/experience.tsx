import React, { useState } from 'react';
import {
	Typography,
	Box,
	IconButton,
	Collapse,
	useMediaQuery,
	useTheme,
	Link,
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
import { Link as LinkIcon } from '@mui/icons-material';

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
			url: 'https://camad.org.ar/',
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
			url: 'https://peninsulavaldes.org.ar/',
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
			<Timeline position='right' style={{ padding: '0px' }}>
				{experiences.map((exp, index) => (
					<TimelineItem key={index}>
						<TimelineOppositeContent
							sx={{ flex: 0, padding: 0 }}
						></TimelineOppositeContent>
						<TimelineSeparator sx={{ paddingLeft: 0 }}>
							<TimelineDot sx={{ backgroundColor: 'grey.500' }}>
								<Work size={12} color='#fff' />{' '}
								{/* Ícono más pequeño y en gris */}
							</TimelineDot>
							{index !== experiences.length - 1 && (
								<TimelineConnector sx={{ backgroundColor: 'grey.500' }} />
							)}
						</TimelineSeparator>
						<TimelineContent sx={{ paddingRight: 0 }}>
							{/* Período por encima de la card */}
							<Typography
								variant='body2'
								color='text.secondary'
								my={1}
								paddingLeft={1}
								sx={{
									fontSize: '0.875rem', // Tamaño de fuente más pequeño
									color: 'grey.600', // Color más sutil
									fontStyle: 'italic', // Estilo cursiva para un toque sutil
								}}
							>
								{exp.period}
							</Typography>
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
									display='flex'
									alignItems='center'
								>
									{exp.title}
									<Link
										href={exp.url}
										target='_blank'
										rel='noopener noreferrer'
										sx={{ display: 'flex', alignItems: 'center', ml: 1 }}
									>
										<LinkIcon sx={{ color: 'text.secondary' }} />
									</Link>
								</Typography>
								<Typography
									variant='subtitle1'
									color='text.secondary'
									fontWeight='bold'
								>
									{exp.role}
								</Typography>

								<Box component='ul' sx={{ pl: 2, mt: 1 }}>
									{exp.description}
								</Box>
							</Box>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		</Box>
	);
};

export default ExperienceSection;
