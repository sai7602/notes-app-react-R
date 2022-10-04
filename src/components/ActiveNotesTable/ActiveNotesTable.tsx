import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
	Table,
	TableBody,
	TableRow,
	TableCell,
	TablePagination,
	TableContainer,
	Paper,
	Box,
	Button,
	Tooltip,
} from '@mui/material';

import {
	DeleteTwoTone,
	ArchiveTwoTone,
	EditTwoTone,
} from '@mui/icons-material';

import { Data, Order } from '../../types';
import categoryIcon from '../../utils/categoryIcon';
import getComparator from '../../utils/getComparator';
import stableSort from '../../utils/stableSort';
import ActiveNotesTableHead from './ActiveNotesTableHead';
import TableTitle from '../TableTitle';
import AddEditModal from '../Modals/AddEditModal/AddEditModal';
import { activeNoteSelector } from '../../store/selectors/activeNoteSelector';

import { visibilityAddEditModal } from '../../store/actions/visibilityAddEditModal';
import { visibilityArchiveDelete } from '../../store/actions/visibilityArchiveDelete';
import DeleteArchiveNoteModal from '../Modals/DeleteArchiveNoteModal/DeleteArchiveNoteModal';
import { visuallyHiddenSelector } from '../../store/selectors/visuallyHiddenSelector';
import { changeMode } from '../../store/actions/changeMode';
import { changeNoteId } from '../../store/actions/changeNoteId';

function ActiveNotesTable() {
	const dispatch = useDispatch();
	const initialData = useSelector(activeNoteSelector);
	const visuallyHidden = useSelector(visuallyHiddenSelector);
	const handleOpen = () => {
		dispatch(changeMode('Add Note'));
		dispatch(visibilityAddEditModal());
	};
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

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleArchive = (id: string) => {
		dispatch(changeMode('Archive Note'));
		dispatch(changeNoteId(id));
		dispatch(visibilityArchiveDelete());
	};
	const handleEdit = (id: string) => {
		dispatch(changeMode('Edit Note'));
		dispatch(changeNoteId(id));
		dispatch(visibilityAddEditModal());
	};
	const handleDelete = (id: string) => {
		dispatch(changeMode('Delete Note'));
		dispatch(changeNoteId(id));
		dispatch(visibilityArchiveDelete());
	};
	return (
		<Box sx={{ width: '100%', padding: '20px' }}>
			<Paper elevation={0} sx={{ width: '100%', mb: 3, p: 3 }}>
				<TableTitle title={'Active list'} />
				<TableContainer>
					<Table
						sx={{
							minWidth: 750,
							width: '95%',
							p: 3,
							m: 3,
							borderCollapse: 'separate',
							borderSpacing: '0 10px',
						}}
						aria-labelledby="tableTitle"
					>
						<ActiveNotesTableHead
							order={order}
							orderBy={orderBy}
							onRequestSort={handleRequestSort}
							rowCount={initialData.length}
						/>
						<TableBody sx={{ width: '100%', mb: 3, p: 3 }}>
							{stableSort(
								initialData,
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
													? 'bg-gray-100'
													: ' bg-gray-300'
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
												style={{ cursor: 'pointer' }}
												onClick={() =>
													handleEdit(row.id)
												}
												align="right"
											>
												<Tooltip
													title="Edit Note"
													arrow
												>
													<EditTwoTone />
												</Tooltip>
											</TableCell>
											<TableCell
												style={{ cursor: 'pointer' }}
												onClick={() =>
													handleArchive(row.id)
												}
												align="right"
											>
												<Tooltip
													title="Move Note To Archive"
													arrow
												>
													<ArchiveTwoTone />
												</Tooltip>
											</TableCell>
											<TableCell
												className="rounded-r-lg"
												style={{ cursor: 'pointer' }}
												onClick={() =>
													handleDelete(row.id)
												}
												align="right"
											>
												<Tooltip
													title="Delete note"
													arrow
												>
													<DeleteTwoTone />
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
				<Box justifyContent={'center'} display={'flex'}>
					<Button onClick={handleOpen} variant="contained">
						Add Note
					</Button>
					{visuallyHidden.visibilityAddEditModal ? (
						<AddEditModal />
					) : (
						''
					)}
					{visuallyHidden.visibilityArchiveDelete ? (
						<DeleteArchiveNoteModal />
					) : (
						''
					)}
				</Box>
			</Paper>
		</Box>
	);
}

export default ActiveNotesTable;
