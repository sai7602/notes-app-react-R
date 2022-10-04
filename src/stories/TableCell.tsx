import MUITableCell from '@mui/material/TableCell';
import React from 'react';

interface TableCellProps {
	/**
	 * The color of the component. It supports those theme colors that make sense for this component.
	 * @default 'bg-gray-300'
	 */
	color?: 'bg-gray-100' | 'bg-gray-300' | 'bg-gray-500';

	/**
	 * The variant to use.
	 * @default 'rounded-l-lg'
	 */
	rounded?:
		| 'rounded-none'
		| 'rounded-l-lg'
		| 'rounded-r-lg'
		| 'rounded-b-lg'
		| 'rounded-t-lg'
		| 'rounded-lg';
	/**
	 * The URL to link to when the button is clicked.
	 * If defined, an `a` element will be used as the root node.
	 */
	readonly className?: string;
}

const TableCell: React.FC<TableCellProps> = ({ ...props }) => {
	return <MUITableCell {...props}></MUITableCell>;
};

export default TableCell;
