import initialData from './initialData';

const renderPage = () => {
	const data =
		JSON.parse(localStorage.getItem('list') as string) || initialData;

	const allSummary = [];

	type summaryData = {
		catImg: string;
		nameInput: string;
		totalActive: number;
		totalArchived: number;
	};
};
//   const renderNotes = data
//     .filter(rec => !rec.archived)
//     .map(rec => ` ${createNote(rec)} `)
//     .join('');
//   const renderArchived = data
//     .filter(rec => rec.archived)
//     .map(rec => ` ${archivedNote(rec)} `)
//     .join('');
//   categories.forEach(el => {
//     const filteredEl = data.filter(rec => rec.catId == el.catId);
//     const summaryData = {
//       catImg: el.catImg,
//       nameInput: el.catName,
//       totalActive: filteredEl.filter(rec => !rec.archived).length,
//       totalArchived: filteredEl.filter(rec => rec.archived).length,
//     };
//     allSummary.push(summaryData);
//   });
//   const renderSummary = allSummary
//     .filter(rec => rec.totalActive > 0 || rec.totalArchived > 0)
//     .map(rec => ` ${summaryNotes(rec)} `)
//     .join('');
// };
export default renderPage;
