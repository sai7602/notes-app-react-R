import React, { useId } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid';

import {
	Table,
	TableBody,
	TableHead,
	TableRow,
	TableCell,
	TablePagination,
	TableSortLabel,
	TableContainer,
} from '@mui/material';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { visuallyHidden } from '@mui/utils';
import {
	DeleteTwoTone,
	ShoppingCartTwoTone,
	ArchiveTwoTone,
	UnarchiveTwoTone,
	Inventory2TwoTone,
	TipsAndUpdatesTwoTone,
	FormatQuoteTwoTone,
	PsychologyTwoTone,
	EditTwoTone,
} from '@mui/icons-material';
import './ActiveNotesTable.scss';
import { Order } from '../types';

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
