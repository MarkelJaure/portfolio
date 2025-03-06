import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const TypewriterText = ({ text }: { text: string }) => {
	const [displayText, setDisplayText] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		setDisplayText('');
		setCurrentIndex(0);
	}, [text]);

	useEffect(() => {
		if (currentIndex < text.length) {
			const timeout = setTimeout(() => {
				setDisplayText((prev) => prev + text[currentIndex]);
				setCurrentIndex((prev) => prev + 1);
			}, 50);

			return () => clearTimeout(timeout);
		}
	}, [currentIndex, text]);

	return (
		<Typography
			variant='h6'
			fontFamily={'monospace'}
			sx={{
				whiteSpace: 'pre-wrap',
				width: '100%',
				fontSize: '1.02rem',
			}}
		>
			{displayText}
		</Typography>
	);
};

export default TypewriterText;
