import React from 'react';
import Box from '@mui/material/Box';
import { TableHead, TableRow, TableCell, TableSortLabel } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { Inventory2TwoTone } from '@mui/icons-material';
import { Data, Order } from '../../types';
interface HeadCell {
	disablePadding: boolean;
	id: keyof Data;
	label: string;
	numeric: boolean;
}

const headCells: readonly HeadCell[] = [
	{
		id: 'name',
		numeric: true,
		disablePadding: false,
		label: 'Name',
	},
	{
		id: 'createDate',
		numeric: true,
		disablePadding: false,
		label: 'Created',
	},
	{
		id: 'category',
		numeric: true,
		disablePadding: false,
		label: 'Category',
	},
	{
		id: 'content',
		numeric: true,
		disablePadding: false,
		label: 'Content',
	},
	{
		id: 'modificationDate',
		numeric: true,
		disablePadding: false,
		label: 'Dates',
	},
];

interface EnhancedTableProps {
	onRequestSort: (
		event: React.MouseEvent<unknown>,
		property: keyof Data
	) => void;
	order: Order;
	orderBy: string;
	rowCount: number;
}

function ArchiveNotesTableHead(props: EnhancedTableProps) {
	const { order, orderBy, onRequestSort } = props;
	const createSortHandler =
		(property: keyof Data) => (event: React.MouseEvent<unknown>) => {
			onRequestSort(event, property);
		};

	return (
		<TableHead>
			<TableRow className={`bg-gray-500`}>
				<TableCell
					padding="checkbox"
					className={`rounded-l-lg `}
				></TableCell>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? 'right' : 'left'}
						padding={headCell.disablePadding ? 'none' : 'normal'}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box component="span" sx={visuallyHidden}>
									{order === 'desc'
										? 'sorted descending'
										: 'sorted ascending'}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
				<TableCell align="right" className={`rounded-r-lg `}>
					<Inventory2TwoTone />
				</TableCell>
			</TableRow>
		</TableHead>
	);
}

export default ArchiveNotesTableHead;
