import { Typography, Box } from '@mui/material';
import { useEffect, useState } from 'react';

const TypewriterText = ({ text }: { text: string }) => {
	const [displayText, setDisplayText] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (currentIndex < text.length) {
			const timeout = setTimeout(() => {
				setDisplayText((prev) => prev + text[currentIndex]);
				setCurrentIndex((prev) => prev + 1);
			}, 50); // Velocidad de escritura

			return () => clearTimeout(timeout);
		}
	}, [currentIndex, text]);

	return (
		<Box sx={{ position: 'relative', width: '100%', height: '3em' }}>
			<Typography
				variant='h6'
				fontFamily={'Consolas, monospace'}
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					visibility: 'hidden',
					whiteSpace: 'pre-wrap',
					width: '100%',
				}}
			>
				{text}
			</Typography>
			<Typography
				variant='h6'
				fontFamily={'Consolas, monospace'}
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					whiteSpace: 'pre-wrap',
					width: '100%',
				}}
			>
				{displayText}
			</Typography>
		</Box>
	);
};

export default TypewriterText;
