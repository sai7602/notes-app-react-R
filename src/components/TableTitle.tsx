import {  Toolbar, Typography } from '@mui/material';

interface EnhancedTableToolbarProps {
	title: string;
}

const TableTitle = (props: EnhancedTableToolbarProps) => {
	const { title } = props;

	return (
		<Toolbar
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },
			}}
		>
			<Typography
				align="center"
				sx={{ flex: '1 1 100%' }}
				variant="h4"
				id="tableTitle"
				component="div"
			>
				{title}
			</Typography>
		</Toolbar>
	);
};

export default TableTitle;
