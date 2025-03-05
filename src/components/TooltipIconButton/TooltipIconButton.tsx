import { Tooltip, IconButton } from '@mui/material';
import { FC } from 'react';

type Props = {
	show: boolean;
	title: string;
	size: 'small' | 'medium' | 'large';
	href: string;
	Icon?: React.ComponentType<{ fontSize?: 'small' | 'medium' | 'large' }>;
	color: any;
};

const TooltipIconButton: FC<Props> = ({
	show,
	title,
	size,
	href,
	Icon,
	color,
}) => {
	if (!show) return null;

	return (
		<Tooltip title={title}>
			<IconButton href={href} target='_blank' size={size} color={color}>
				{Icon && <Icon fontSize={size} />}
			</IconButton>
		</Tooltip>
	);
};

export default TooltipIconButton;
