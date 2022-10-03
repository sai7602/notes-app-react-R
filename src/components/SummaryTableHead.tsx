import { TableHead, TableRow, TableCell } from '@mui/material';

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
			<TableRow className="bg-slate-400 ">
				<TableCell
					padding="checkbox"
					className="rounded-l-lg"
				></TableCell>
				{headCells.map((headCell, index) => (
					<TableCell
						key={headCell.id}
						align="center"
						className={`${
							index === headCells.length - 1 ? 'rounded-r-lg' : ''
						}`}
					>
						{headCell.label}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

export default SummaryTableHead;
