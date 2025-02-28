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
import { Trans, useTranslation } from 'react-i18next';

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
			title: t('experience.items.camad.title'),
			period: t('experience.items.camad.period'),
			role: t('experience.items.camad.role'),
			description: [
				<Typography key='1' component='li' variant='body2' mt={2}>
					<Trans
						i18nKey='experience.items.camad.description.1'
						components={{
							link: (
								<Link href='#mic' onClick={(e) => scrollToProject(e, 'mic')}>
									{/* El contenido dentro de <link> se pasa automáticamente aquí */}
								</Link>
							),
							strong: <strong />,
						}}
					/>
				</Typography>,
				<Typography key='2' component='li' variant='body2'>
					<Trans
						i18nKey='experience.items.camad.description.2'
						components={{
							strong: <strong />,
						}}
					/>
				</Typography>,
				<Typography key='3' component='li' variant='body2'>
					<Trans
						i18nKey='experience.items.camad.description.3'
						components={{
							strong: <strong />,
						}}
					/>
				</Typography>,
			],
		},
		{
			title: t('experience.items.anppv.title'),
			period: t('experience.items.anppv.period'),
			role: t('experience.items.anppv.role'),
			description: [
				<Typography key='1' component='li' variant='body2' mt={2}>
					<Trans
						i18nKey='experience.items.anppv.description.1'
						components={{
							link: (
								<Link href='#anp' onClick={(e) => scrollToProject(e, 'anp')}>
									{/* El contenido dentro de <link> se pasa automáticamente aquí */}
								</Link>
							),
							strong: <strong />,
						}}
					/>
				</Typography>,
				<Typography key='2' component='li' variant='body2'>
					<Trans
						i18nKey='experience.items.anppv.description.2'
						components={{
							strong: <strong />,
						}}
					/>
				</Typography>,
				<Typography key='3' component='li' variant='body2'>
					<Trans
						i18nKey='experience.items.anppv.description.3'
						components={{
							strong: <strong />,
						}}
					/>
				</Typography>,
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
				fontFamily={'Consolas, monospace'}
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
