import React, { useState } from 'react';
import Box from '@mui/material/Box';

import {
	Table,
	TableBody,
	TableRow,
	TableCell,
	TablePagination,
	TableContainer,
	Tooltip,
} from '@mui/material';

import Paper from '@mui/material/Paper';
import { UnarchiveTwoTone } from '@mui/icons-material';
import { Data, Order } from '../../types';
import categoryIcon from '../../utils/categoryIcon';
import getComparator from '../../utils/getComparator';
import stableSort from '../../utils/stableSort';
import ArchiveNotesTableHead from './ArchiveNotesTableHead';
import TableTitle from '../TableTitle';
import { useDispatch, useSelector } from 'react-redux';
import { archivedNoteSelector } from '../../store/selectors/archivedNoteSelector';
import { visibilityArchiveDelete } from '../../store/actions/visibilityArchiveDelete';
import { changeMode } from '../../store/actions/changeMode';
import { changeNoteId } from '../../store/actions/changeNoteId';

function ArchiveNotesTable() {
	const initialData = useSelector(archivedNoteSelector);
	const [order, setOrder] = useState<Order>('asc');
	const [orderBy, setOrderBy] = useState<keyof Data>('name');
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const handleRequestSort = (
		event: React.MouseEvent<unknown>,
		property: keyof Data
	) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const dispatch = useDispatch();

	const handleArchive = (id: string) => {
		dispatch(changeMode('UnArchive Note'));
		dispatch(changeNoteId(id));
		dispatch(visibilityArchiveDelete());
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
						className="!border-separate !border-spacing-y-2 !m-0"
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
											className={`${
												index % 2 === 0
													? 'bg-slate-100'
													: ' bg-slate-300'
											}`}
										>
											<TableCell className="rounded-l-lg">
												{categoryIcon(row.category)}
											</TableCell>
											<TableCell
												component="th"
												id={labelId}
												scope="row"
											>
												{row.name}
											</TableCell>
											<TableCell align="left">
												{row.createDate}
											</TableCell>
											<TableCell align="left">
												{row.category}
											</TableCell>
											<TableCell align="left">
												{row.content}
											</TableCell>
											<TableCell align="left">
												{row.modificationDate}
											</TableCell>

											<TableCell
												className="rounded-r-lg"
												style={{ cursor: 'pointer' }}
												onClick={() =>
													handleArchive(row.id)
												}
												align="right"
											>
												<Tooltip
													title="Move Note From Archive"
													arrow
												>
													<UnarchiveTwoTone />
												</Tooltip>
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
			<Box justifyContent={'center'} display={'flex'}></Box>
		</Box>
	);
}

export default ArchiveNotesTable;
