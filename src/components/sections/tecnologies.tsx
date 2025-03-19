import React, { useEffect } from 'react';
import { Box, Typography, Paper, Grid, Stack, useTheme } from '@mui/material';
import { FaDatabase, FaTools, FaCode, FaGlobe } from 'react-icons/fa';
import ToolTag from '../ToolTag/ToolTag';
import useTechnologies from '@/hooks/useTecnologies';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AnimatedIcon = motion(Box);

type Tech = {
	category: string;
	icon: any;
	tools: any[];
};

type TechnologyProps = {
	tech: Tech;
	index: number;
};

const TechnologyCard = ({ tech, index }: TechnologyProps) => {
	const controls = useAnimation();
	const ref = React.useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			controls.start('visible');
		}
	}, [controls, isInView]);

	return (
		<Grid item xs={12} sm={6} ref={ref}>
			<Paper
				elevation={3}
				sx={{
					p: 3,
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
				}}
			>
				<Stack direction='row' spacing={2} alignItems='center' mb={2}>
					<AnimatedIcon
						initial='hidden'
						animate={controls}
						variants={{
							hidden: { rotate: 0, opacity: 0 },
							visible: { rotate: 360, opacity: 1 },
						}}
						transition={{
							type: 'spring',
							stiffness: 150,
							damping: 20,
							delay: index * 0.2,
						}}
						sx={{
							p: 1,
							borderRadius: '50%',
							backgroundColor: 'background.default',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						{tech.icon}
					</AnimatedIcon>
					<Typography variant='h6' fontFamily='monospace' fontWeight='bold'>
						{tech.category}
					</Typography>
				</Stack>
				<Box sx={{ flexGrow: 1 }}>
					<Stack direction='row' gap={1} flexWrap='wrap'>
						{tech.tools.map((tool, idx) => (
							<ToolTag
								key={idx}
								name={tool.name}
								icon={tool.icon}
								showName={true}
							/>
						))}
					</Stack>
				</Box>
			</Paper>
		</Grid>
	);
};

export default function Technologies() {
	const theme = useTheme();
	const { t } = useTranslation();

	const technologies = [
		{
			category: t('technologies.items.frontend'),
			icon: <FaGlobe size={32} color={theme.palette.primary.main} />,
			tools: useTechnologies(['React', 'Next.js', 'TypeScript', 'JavaScript']),
		},
		{
			category: t('technologies.items.backend'),
			icon: <FaCode size={32} color={theme.palette.secondary.main} />,
			tools: useTechnologies([
				'Node.js',
				'Express.js',
				'Nest.js',
				'Java',
				'PHP',
			]),
		},
		{
			category: t('technologies.items.database'),
			icon: <FaDatabase size={32} color={theme.palette.warning.main} />,
			tools: useTechnologies(['MongoDB', 'PostgreSQL', 'MySQL']),
		},
		{
			category: t('technologies.items.tools'),
			icon: <FaTools size={32} color={theme.palette.info.main} />,
			tools: useTechnologies(['Git', 'Docker', 'Nginx']),
		},
	];

	return (
		<Box id='technologies' my={4}>
			<Typography
				variant='h4'
				fontWeight='bold'
				textAlign='center'
				fontFamily='monospace'
				mb={6}
			>
				{t('technologies.title')}
			</Typography>
			<Grid container spacing={3}>
				{technologies.map((tech, index) => (
					<TechnologyCard key={index} tech={tech} index={index} />
				))}
			</Grid>
		</Box>
	);
}
