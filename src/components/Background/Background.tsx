import { motion } from 'framer-motion';
import { Box } from '@mui/material';

const Background = () => {
	return (
		<Box
			sx={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: -1, // Colocar el fondo detrás del contenido
				overflow: 'hidden',
			}}
		>
			{/* Efecto de Aureola: fondo semicircular con gradiente */}
			<motion.div
				style={{
					position: 'absolute',
					top: 0,
					left: '50%',
					width: '200%',
					height: '50%',
					borderRadius: '50%',
					transform: 'translateX(-50%)',
				}}
				initial={{
					background:
						'linear-gradient(circle, rgba(255, 255, 255, 0.8) 10%, rgba(0, 0, 0, 0.3) 80%)',
				}}
				animate={{
					background: [
						'linear-gradient(circle, rgba(255, 255, 255, 0.8) 10%, #0d1117 80%)',
						'linear-gradient(circle, rgba(255, 255, 255, 0.6) 20%, #0d1117 70%)',
						'linear-gradient(circle, rgba(255, 255, 255, 0.9) 10%, #0d1117 80%)',
					],
				}}
				transition={{
					duration: 6,
					ease: 'easeInOut',
					repeat: Infinity,
					repeatType: 'reverse',
				}}
			/>
		</Box>
	);
};

export default Background;
