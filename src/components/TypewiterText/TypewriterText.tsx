import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const TypewriterText = ({ text }: { text: string }) => {
	const [displayText, setDisplayText] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);

	// Reiniciar el efecto cuando el texto cambie
	useEffect(() => {
		setDisplayText(''); // Reiniciar el texto mostrado
		setCurrentIndex(0); // Reiniciar el índice
	}, [text]);

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
		<Typography
			variant='h6'
			fontFamily={'Consolas, monospace'}
			sx={{
				whiteSpace: 'pre-wrap',
				width: '100%',
				minHeight: '3em',
			}}
		>
			{displayText}
		</Typography>
	);
};

export default TypewriterText;
