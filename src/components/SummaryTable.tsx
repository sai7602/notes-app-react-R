import React from 'react';
import Box from '@mui/material/Box';

import {
	Table,
	TableBody,
	TableRow,
	TableCell,
	TableContainer,
} from '@mui/material';

import Paper from '@mui/material/Paper';

import './ActiveNotesTable.scss';
import categoryIcon from '../utils/categoryIcon';
import initialAllData from '../data/initialData';
import TableTitle from './TableTitle';
import SummaryTableHead from './SummaryTableHead';
const initialData = initialAllData.filter((data) => data.isArchived);

function SummaryTable() {
	return (
		<Box sx={{ width: '100%', padding: '20px' }}>
			<Paper elevation={0} sx={{ width: '100%', mb: 3, p: 3 }}>
				<TableTitle title={'Summary list'} />
				<TableContainer>
					<Table
						className="table"
						sx={{ minWidth: 750, p: 3, m: 3 }}
						aria-labelledby="tableTitle"
					>
						<SummaryTableHead />
						<TableBody sx={{ width: '100%', mb: 3, p: 3 }}>
							{initialData.map((row, index) => {
								const labelId = `enhanced-table-checkbox-${index}`;

								return (
									<TableRow hover tabIndex={-1} key={row.id}>
										<TableCell>
											{categoryIcon(row.icon)}
										</TableCell>
										<TableCell
											component="th"
											id={labelId}
											scope="row"
											align="center"
										>
											{row.name}
										</TableCell>
										<TableCell align="center">
											{row.createDate}
										</TableCell>
										<TableCell align="center">
											{row.category}
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</Box>
	);
}

export default SummaryTable;
