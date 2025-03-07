import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

const TypewriterText = ({ text }: { text: string }) => {
	const [displayText, setDisplayText] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
			minHeight={isMobile ? '3.3rem' : '1.6rem'}
		>
			{displayText}
		</Typography>
	);
};

export default TypewriterText;
