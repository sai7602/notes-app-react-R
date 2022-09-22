import Container from '@mui/material/Container';
import ActiveNotesTable from './components/ActiveNotesTable/ActiveNotesTable';
import ArchiveNotesTable from './components/ArchiveNotesTable/ArchiveNotesTable';
import SummaryTable from './components/SummaryTable';

function App() {
	return (
		<Container>
			<ActiveNotesTable />
			<SummaryTable />
			<ArchiveNotesTable />
		</Container>
	);
}

export default App;
