import {
	Card,
	CardContent,
	Typography,
	CardActions,
	IconButton,
	Stack,
	Box,
	Paper,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ToolTag from '../ToolTag/ToolTag';
import { Key } from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';

const SecondaryProjectCard = ({ project }: { project: any }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: 1,
			}}
		>
			{/* Imagen fuera de la card */}
			<Paper
				elevation={3}
				sx={{
					width: 250,
					height: 150,
					position: 'relative',
					borderRadius: 2,
					overflow: 'hidden',
				}}
			>
				<ImageSlider images={project.images} type={project.type} />
			</Paper>

			{/* Card */}
			<Card
				elevation={3}
				sx={{
					width: 250,
					padding: 1,
					borderRadius: 2,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<CardContent sx={{ flex: 1, textAlign: 'center', p: 1 }}>
					<Typography variant='subtitle2' fontWeight='bold' noWrap>
						{project.title}
					</Typography>

					{/* ToolTags solo con iconos */}
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

				{/* Botones solo con iconos */}
				<CardActions sx={{ justifyContent: 'center', p: 1 }}>
					{project.previewUrl && (
						<IconButton href={project.previewUrl} target='_blank' size='small'>
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
						<IconButton href={project.paperUrl} target='_blank' size='small'>
							<PictureAsPdfIcon fontSize='small' />
						</IconButton>
					)}
					{project.sourceUrl && (
						<IconButton href={project.sourceUrl} target='_blank' size='small'>
							<GitHubIcon fontSize='small' />
						</IconButton>
					)}
				</CardActions>
			</Card>
		</Box>
	);
};

export default SecondaryProjectCard;
