import { Data, SummaryData } from '../types';
import categories from './categoryList';
const SummaryResult = (allData: Data[]): SummaryData[] => {
	const allSummary: any = [];

	categories.forEach((category) => {
		const filteredEl = allData.filter(
			(data) => data.category === category.catName
		);
		const summaryData: SummaryData = {
			categoryId: category.catId,
			categoryName: category.catName,
			totalActive: filteredEl.filter((rec) => !rec.isArchived).length,
			totalArchived: filteredEl.filter((rec) => rec.isArchived).length,
		};
		allSummary.push(summaryData);
	});
	return allSummary;
};
export default SummaryResult;
