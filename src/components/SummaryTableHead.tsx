import React from 'react';

import { TableHead, TableRow, TableCell } from '@mui/material';

import './ActiveNotesTable.scss';

export interface Data {
	id: string;
	name: string;
	createDate: string;
	category: string;
	content: string;
	modificationDate: string;
	icon: any;
	isArchived: any;
}
interface HeadCell {
	disablePadding: boolean;
	id: string;
	label: string;
	numeric: boolean;
}

const headCells: readonly HeadCell[] = [
	{
		id: 'name',
		numeric: false,
		disablePadding: true,
		label: 'Note Category',
	},
	{
		id: 'active',
		numeric: true,
		disablePadding: false,
		label: 'Active',
	},
	{
		id: 'archived',
		numeric: true,
		disablePadding: false,
		label: 'Archived',
	},
];

function SummaryTableHead() {
	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox"></TableCell>
				{headCells.map((headCell) => (
					<TableCell key={headCell.id} align="center">
						{headCell.label}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

export default SummaryTableHead;
