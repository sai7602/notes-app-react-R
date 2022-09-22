import React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';

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
import { Data, Order } from '../../types';
import categoryIcon from '../../utils/categoryIcon';
import getComparator from '../../utils/getComparator';
import stableSort from '../../utils/stableSort';
// import initialAllData from '../../data/initialData';
import ArchiveNotesTableHead from './ArchiveNotesTableHead';
import TableTitle from '../TableTitle';
import '../ActiveNotesTable.scss';
import { useDispatch, useSelector } from 'react-redux';
import { archivedNoteSelector } from '../../store/selectors/archivedNoteSelector';
import { archiveNoteAction } from '../../store/actions/archiveNoteAction';
// const initialData = initialAllData.filter((data) => data.isArchived);

function ArchiveNotesTable() {
	const initialData = useSelector(archivedNoteSelector);
	const [order, setOrder] = React.useState<Order>('asc');
	const [orderBy, setOrderBy] = React.useState<keyof Data>('name');
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const handleRequestSort = (
		event: React.MouseEvent<unknown>,
		property: keyof Data
	) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const dispatch = useDispatch();

	const handleArchive = (id: any) => {
		dispatch(archiveNoteAction(id));
	};
	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<Box sx={{ width: '100%', padding: '20px' }}>
			<Paper elevation={0} sx={{ width: '100%', mb: 3, p: 3 }}>
				<TableTitle title={'Archived list'} />
				<TableContainer>
					<Table
						className="table"
						sx={{ minWidth: 750, p: 3, m: 3 }}
						aria-labelledby="tableTitle"
					>
						<ArchiveNotesTableHead
							order={order}
							orderBy={orderBy}
							onRequestSort={handleRequestSort}
							rowCount={initialData.length}
						/>
						<TableBody sx={{ width: '100%', mb: 3, p: 3 }}>
							{stableSort(
								initialData as any,
								getComparator(order, orderBy)
							)
								.slice(
									page * rowsPerPage,
									page * rowsPerPage + rowsPerPage
								)
								.map((row, index) => {
									const labelId = `enhanced-table-checkbox-${index}`;

									return (
										<TableRow
											hover
											tabIndex={-1}
											key={row.id}
										>
											<TableCell>
												{categoryIcon(row.icon as any)}
											</TableCell>
											<TableCell
												component="th"
												id={labelId}
												scope="row"
											>
												{row.name}
											</TableCell>
											<TableCell align="right">
												{row.createDate}
											</TableCell>
											<TableCell align="right">
												{row.category}
											</TableCell>
											<TableCell align="right">
												{row.content}
											</TableCell>
											<TableCell align="right">
												{row.modificationDate}
											</TableCell>

											<TableCell
												onClick={() =>
													handleArchive(row.id)
												}
												align="right"
											>
												<UnarchiveTwoTone />
											</TableCell>
										</TableRow>
									);
								})}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={initialData.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
		</Box>
	);
}

export default ArchiveNotesTable;
