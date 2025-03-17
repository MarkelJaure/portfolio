import {
	Card,
	CardContent,
	Typography,
	CardActions,
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
import TooltipIconButton from '../TooltipIconButton/TooltipIconButton';

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
							height: 169,
							padding: 1,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<CardContent
							sx={{ flex: 1, textAlign: 'center', p: 1, width: '100%' }}
						>
							<Typography
								variant='h6'
								fontWeight='bold'
								sx={{
									fontSize: '1.1rem',
									lineHeight: 1.2,
									display: '-webkit-box',
									WebkitLineClamp: 2,
									WebkitBoxOrient: 'vertical',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
								}}
							>
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

						<CardActions sx={{ justifyContent: 'center', p: 1, mt: 'auto' }}>
							<TooltipIconButton
								show={project.previewUrl !== undefined}
								title={t('projects.buttons.preview')}
								size='small'
								href={project.previewUrl || ''}
								Icon={LaunchIcon}
							/>
							<TooltipIconButton
								show={project.presentationUrl !== undefined}
								title={t('projects.buttons.presentation')}
								size='small'
								href={project.presentationUrl || ''}
								Icon={YouTubeIcon}
								color={'error'}
							/>
							<TooltipIconButton
								show={project.paperUrl !== undefined}
								title={t('projects.buttons.paper')}
								size='small'
								href={project.paperUrl || ''}
								Icon={PictureAsPdfIcon}
							/>
							<TooltipIconButton
								show={project.sourceUrl !== undefined}
								title={t('projects.buttons.source')}
								size='small'
								href={project.sourceUrl || ''}
								Icon={GitHubIcon}
							/>
						</CardActions>
						<Button size='small' onClick={handleFlip}>
							{t('projects.buttons.viewMore')}
						</Button>
					</Card>
				</Box>

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
							padding: 1,
						}}
					>
						<Typography
							variant='h6'
							fontWeight='bold'
							sx={{
								textAlign: 'center',
								marginBottom: 2,
								fontSize: '1.1rem',
								lineHeight: '1.2',
								height: '2.5em',
								display: '-webkit-box',
								WebkitLineClamp: 2,
								WebkitBoxOrient: 'vertical',
								textOverflow: 'ellipsis',
								alignContent: 'center',
							}}
							padding={1}
						>
							{project.titleExtended || project.title}
						</Typography>
						<Typography
							variant='body2'
							color='text.secondary'
							sx={{
								fontSize: '0.8rem',
								lineHeight: 1.5,
								height: '200px', // Aproximadamente 6 líneas de texto
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								display: '-webkit-box',
								WebkitBoxOrient: 'vertical',
							}}
							padding={1}
						>
							{project.description}
						</Typography>
						<Box sx={{ flexGrow: 1 }} /> {/* Espaciador flexible */}
						<Button
							size='small'
							onClick={handleFlip}
							sx={{
								alignSelf: 'center',
							}}
						>
							{t('projects.buttons.goBack')}
						</Button>
					</Card>
				</Box>
			</motion.div>
		</Box>
	);
};

export default SecondaryProjectCard;
