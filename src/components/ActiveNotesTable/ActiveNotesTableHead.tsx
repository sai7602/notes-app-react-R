import React from 'react';
import Box from '@mui/material/Box';

import {
	TableHead,
	TableRow,
	TableCell,
	TableSortLabel,
	Tooltip,
} from '@mui/material';

import { visuallyHidden } from '@mui/utils';
import { DeleteTwoTone, Inventory2TwoTone } from '@mui/icons-material';
import '../ActiveNotesTable.scss';
import { Data, Order } from '../../types';
import { clearStorage } from '../../data/local-storage';
interface HeadCell {
	disablePadding: boolean;
	id: keyof Data;
	label: string;
	numeric: boolean;
}

const headCells: readonly HeadCell[] = [
	{
		id: 'name',
		numeric: false,
		disablePadding: false,
		label: 'Name',
	},
	{
		id: 'createDate',
		numeric: false,
		disablePadding: false,
		label: 'Created',
	},
	{
		id: 'category',
		numeric: false,
		disablePadding: false,
		label: 'Category',
	},
	{
		id: 'content',
		numeric: false,
		disablePadding: false,
		label: 'Content',
	},
	{
		id: 'modificationDate',
		numeric: false,
		disablePadding: false,
		label: 'Dates',
	},
];

interface EnhancedTableProps {
	onRequestSort: (
		event: React.MouseEvent<unknown>,
		property: keyof Data
	) => void;
	// onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
	order: Order;
	orderBy: string;
	rowCount: number;
}
const handleClearLocalStorage = () => {
	clearStorage();
};

function ActiveNotesTableHead(props: EnhancedTableProps) {
	const { order, orderBy, onRequestSort } = props;
	const createSortHandler =
		(property: keyof Data) => (event: React.MouseEvent<unknown>) => {
			onRequestSort(event, property);
		};

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox"></TableCell>
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
				<TableCell align="right"></TableCell>
				<TableCell align="right">
					<Inventory2TwoTone />
				</TableCell>
				<TableCell
					style={{ cursor: 'pointer' }}
					align="right"
					onClick={handleClearLocalStorage}
				>
					<Tooltip title="Clear Local Storage" arrow>
						<DeleteTwoTone />
					</Tooltip>
				</TableCell>
			</TableRow>
		</TableHead>
	);
}

export default ActiveNotesTableHead;
