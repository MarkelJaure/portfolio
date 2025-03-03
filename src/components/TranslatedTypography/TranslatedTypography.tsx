import { Trans } from 'react-i18next';
import { Link, Typography, TypographyProps } from '@mui/material';
import Flag from 'react-world-flags';

interface TranslatedTypographyProps extends TypographyProps {
	i18nKey: string;
	href?: string;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const TranslatedTypography = ({
	i18nKey,
	href,
	onClick,
	...rest
}: TranslatedTypographyProps) => {
	const components = {
		highlight: (
			<Typography component='span' sx={{ color: 'highlight.primary' }} />
		),
		strong: <strong />,
		flag: <Flag code='AR' style={{ width: 20, height: 15, marginInline: 5 }} />,
		link: <Link href={href} onClick={(e) => onClick && onClick(e)} />,
		green: <Typography component='span' sx={{ color: 'success.light' }} />,
	};

	return (
		<Typography {...rest}>
			<Trans i18nKey={i18nKey} components={components} />
		</Typography>
	);
};

export default TranslatedTypography;
