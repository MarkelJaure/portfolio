import { Tooltip, IconButton } from '@mui/material';
import { FC } from 'react';

type Props = {
	show?: boolean;
	title: string;
	size: 'small' | 'medium' | 'large';
	href: string;
	Icon?: React.ComponentType<{ fontSize?: 'small' | 'medium' | 'large' }>;
	color: any;
};

const TooltipIconButton: FC<Props> = ({
	show = true,
	title,
	size,
	href,
	Icon,
	color,
}) => {
	if (!show) return null;

	return (
		<Tooltip title={title}>
			<IconButton
				href={href}
				target='_blank'
				rel='noopener noreferrer'
				size={size}
				color={color}
				aria-label={title}
				sx={{
					bgcolor: 'rgba(255,255,255,0.1)',
					backdropFilter: 'blur(8px)',
					transition: 'all 0.2s ease-in-out',
					'&:hover': {
						bgcolor: 'rgba(255,255,255,0.2)',
						transform: 'translateY(-2px)',
					},
				}}
			>
				{Icon && <Icon fontSize={size} />}
			</IconButton>
		</Tooltip>
	);
};

export default TooltipIconButton;
