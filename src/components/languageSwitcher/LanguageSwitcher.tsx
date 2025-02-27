import { useState } from 'react';
import { Menu, MenuItem, IconButton, Button } from '@mui/material';
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
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
				<Button onClick={handleClick} style={{ padding: 0 }}>
					<Flag
						code={i18n.language === 'es' ? 'ES' : 'GB'}
						style={{ width: '24px', height: '16px', marginRight: '8px' }}
					/>
				</Button>
			</motion.div>
			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={() => handleClose(null)}
			>
				<MenuItem onClick={() => handleClose('es')}>
					<Flag
						code='ES'
						style={{ width: '24px', height: '16px', marginRight: '8px' }}
					/>{' '}
					Español
				</MenuItem>
				<MenuItem onClick={() => handleClose('en')}>
					<Flag
						code='GB'
						style={{ width: '24px', height: '16px', marginRight: '8px' }}
					/>{' '}
					English
				</MenuItem>
			</Menu>
		</div>
	);
};

export default LanguageSwitcher;
