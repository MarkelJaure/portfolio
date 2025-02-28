import {
	Card,
	CardContent,
	Typography,
	CardActions,
	IconButton,
	Stack,
	Box,
	Paper,
	Button,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ToolTag from '../ToolTag/ToolTag';
import { Key, useState } from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SecondaryProjectCard = ({ project }: { project: any }) => {
	const [flipped, setFlipped] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const { t } = useTranslation();

	const handleFlip = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setFlipped(!flipped);
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: 1,
			}}
			// onMouseEnter={handleFlip}
		>
			<motion.div
				animate={{ rotateY: flipped ? 180 : 0 }}
				transition={{ duration: 0.6 }}
				style={{
					width: 250,
					height: 340,
					perspective: '1000px',
					transformStyle: 'preserve-3d',
					position: 'relative',
				}}
				onAnimationComplete={() => setIsAnimating(false)}
			>
				{/* Card frontal */}
				<Box
					sx={{
						backfaceVisibility: 'hidden',
						transform: 'rotateY(0deg)',
						position: 'absolute',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<Paper
						elevation={3}
						sx={{
							width: 250,
							height: 150,
							position: 'relative',
							overflow: 'hidden',
							display: 'flex',
							marginBottom: 1,
						}}
					>
						<ImageSlider
							images={project.images}
							type={t(`projects.types.${project.type}`)}
						/>
					</Paper>

					<Card
						elevation={3}
						sx={{
							width: 250,
							padding: 1,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<CardContent sx={{ flex: 1, textAlign: 'center', p: 1 }}>
							<Typography variant='subtitle2' fontWeight='bold' noWrap>
								{project.title}
							</Typography>

							<Stack
								direction='row'
								justifyContent='center'
								sx={{ mt: 1, gap: 0.5 }}
							>
								{project.tools.map(
									(tool: { icon: unknown }, i: Key | null | undefined) => (
										<ToolTag key={i} icon={tool.icon} />
									)
								)}
							</Stack>
						</CardContent>

						<CardActions sx={{ justifyContent: 'center', p: 1 }}>
							{project.previewUrl && (
								<IconButton
									href={project.previewUrl}
									target='_blank'
									size='small'
								>
									<LaunchIcon fontSize='small' />
								</IconButton>
							)}
							{project.presentationUrl && (
								<IconButton
									href={project.presentationUrl}
									target='_blank'
									size='small'
									color='error'
								>
									<YouTubeIcon fontSize='small' />
								</IconButton>
							)}
							{project.paperUrl && (
								<IconButton
									href={project.paperUrl}
									target='_blank'
									size='small'
								>
									<PictureAsPdfIcon fontSize='small' />
								</IconButton>
							)}
							{project.sourceUrl && (
								<IconButton
									href={project.sourceUrl}
									target='_blank'
									size='small'
								>
									<GitHubIcon fontSize='small' />
								</IconButton>
							)}
						</CardActions>
						<Button size='small' onClick={handleFlip}>
							{flipped ? 'Volver' : 'Ver más'}
						</Button>
					</Card>
				</Box>

				{/* Card posterior */}
				<Box
					sx={{
						backfaceVisibility: 'hidden',
						transform: 'rotateY(180deg)',
						position: 'absolute',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<Card
						elevation={3}
						sx={{
							width: 250,
							height: 327,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							padding: 2,
						}}
					>
						<Typography
							variant='h6'
							fontWeight='bold'
							sx={{
								textAlign: 'center',
								marginBottom: 1,
								fontSize: '1.1rem',
								lineHeight: '1.5', // Ajusta el interlineado para que sea legible
								height: '3em', // 2 líneas (1.5em por línea)
							}}
						>
							{project.titleExtended || project.title}
						</Typography>

						<Typography
							variant='body2'
							color='text.secondary'
							sx={{
								fontSize: '0.8rem',
								lineHeight: 1.5,
								marginBottom: 2,
							}}
						>
							{project.description}
						</Typography>

						<Button
							size='small'
							onClick={handleFlip}
							sx={{
								marginTop: 'auto',
							}}
						>
							{flipped ? 'Volver' : 'Ver más'}
						</Button>
					</Card>
				</Box>
			</motion.div>
		</Box>
	);
};

export default SecondaryProjectCard;
