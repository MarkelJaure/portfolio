import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import {
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineOppositeContent,
} from '@mui/lab';
import { WorkflowIcon as Work } from 'lucide-react';
import { Link as LinkIcon } from '@mui/icons-material';

type TimelineProps = {
	aExperience: {
		title: string;
		period: string;
		role: string;
		url: string;
		description: React.JSX.Element[];
	};
	index: number;
	isLast: boolean;
};
const TimelineComponent = ({ aExperience, index, isLast }: TimelineProps) => {
	return (
		<TimelineItem key={index}>
			<TimelineOppositeContent
				sx={{ flex: 0, padding: 0 }}
			></TimelineOppositeContent>
			<TimelineSeparator sx={{ paddingLeft: 0 }}>
				<TimelineDot sx={{ backgroundColor: 'grey.500' }}>
					<Work size={12} color='#fff' /> {/* Ícono más pequeño y en gris */}
				</TimelineDot>
				{!isLast && <TimelineConnector sx={{ backgroundColor: 'grey.500' }} />}
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
					{aExperience.period}
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
					}}
				>
					<Typography
						variant='h6'
						component='h3'
						color='highlight.secondary'
						display='flex'
						alignItems='center'
					>
						{aExperience.title}
						<Link
							href={aExperience.url}
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
						{aExperience.role}
					</Typography>

					<Box
						component='ul'
						sx={{
							pl: 2,
							mt: 1,
						}}
					>
						{aExperience.description.map((desc: any, index: number) => (
							<Box
								key={index}
								sx={{
									transition: 'all 0.3s ease',
									'&:hover': {
										paddingLeft: 1, // Opcional, para darle más espacio al elemento cuando se haga hover
									},
									'&:hover strong': {
										color: 'highlight.secondary', // Color para los textos en strong cuando se hace hover
									},
								}}
							>
								{desc}
							</Box>
						))}
					</Box>
				</Box>
			</TimelineContent>
		</TimelineItem>
	);
};

export default TimelineComponent;
