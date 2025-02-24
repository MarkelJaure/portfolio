import { Box, CardMedia } from '@mui/material';
import { Key, useEffect, useState } from 'react';
import TypeTag from './typeTag';

const ImageSlider = ({ images, type }: any) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<>
			<Box
				sx={{
					position: 'relative',
					width: '100%',
					height: '100%',
				}}
			>
				<TypeTag type={type} />

				<Box
					sx={{
						position: 'relative',
						width: '100%',
						height: '100%',
						overflow: 'hidden',
						transition: 'transform 0.3s ease-in-out',
						'&:hover': {
							transform: 'scale(1.05)', // Aplica a todas las imágenes
						},
					}}
				>
					{images.map(
						(image: string | undefined, index: Key | null | undefined) => (
							<CardMedia
								key={index}
								component='img'
								src={image}
								sx={{
									position: 'absolute',
									top: 0,
									left: 0,
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									transition: 'opacity 1s ease-in-out',
									opacity: index === currentIndex ? 1 : 0,
								}}
								alt='Project Image'
							/>
						)
					)}
				</Box>
			</Box>
		</>
	);
};

export default ImageSlider;
