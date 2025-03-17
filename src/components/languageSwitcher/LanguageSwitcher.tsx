import { useState } from 'react';
import { Menu, MenuItem, IconButton, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import Flag from 'react-world-flags';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({
	changeLanguage,
}: {
	changeLanguage: (locale: string) => void;
}) => {
	const { i18n } = useTranslation();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (locale: 'es' | 'en' | null) => {
		setAnchorEl(null);
		if (locale) {
			changeLanguage(locale);
			i18n.changeLanguage(locale);
		}
	};

	return (
		<div>
			<Tooltip title='Change Language'>
				<IconButton
					onClick={handleClick}
					sx={{
						height: '40px',
						width: '40px',
						bgcolor: 'rgba(255,255,255,0.1)',
						backdropFilter: 'blur(8px)',
						transition: 'all 0.2s ease-in-out',
						'&:hover': {
							bgcolor: 'rgba(255,255,255,0.2)',
							transform: 'translateY(-2px)',
						},
					}}
				>
					<Flag
						code={i18n.language === 'es' ? 'ES' : 'GB'}
						style={{ width: '24px', height: '16px' }}
					/>
				</IconButton>
			</Tooltip>
			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={() => handleClose(null)}
			>
				<MenuItem onClick={() => handleClose('es')}>
					<Flag
						code='ES'
						alt='ES'
						style={{ width: '24px', height: '16px', marginRight: '8px' }}
					/>{' '}
					Español
				</MenuItem>
				<MenuItem onClick={() => handleClose('en')}>
					<Flag
						code='GB'
						alt='EN'
						style={{ width: '24px', height: '16px', marginRight: '8px' }}
					/>{' '}
					English
				</MenuItem>
			</Menu>
		</div>
	);
};

export default LanguageSwitcher;
