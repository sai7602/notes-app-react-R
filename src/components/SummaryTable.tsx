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
import TableTitle from './TableTitle';
import SummaryTableHead from './SummaryTableHead';
import SummaryResult from '../data/summaryResuls';
import { useSelector } from 'react-redux';
import { Data } from '../types';
function SummaryTable() {
	const allDAta: Data[] = useSelector((state: any) => state.notes);
	const sum = SummaryResult(allDAta);
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
							{sum.map((row, index) => {
								const labelId = `enhanced-table-checkbox-${index}`;

								return (
									<TableRow
										hover
										tabIndex={-1}
										key={row.categoryId}
									>
										<TableCell>
											{categoryIcon(row.categoryName)}
										</TableCell>
										<TableCell
											component="th"
											id={labelId}
											scope="row"
											align="center"
										>
											{row.categoryName}
										</TableCell>
										<TableCell align="center">
											{row.totalActive}
										</TableCell>
										<TableCell align="center">
											{row.totalArchived}
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
