export interface Data {
	id: string;
	name: string;
	createDate: string;
	category: string;
	content: string;
	modificationDate: string;
	isArchived: any;
}

export type SummaryData = {
	categoryId: string;
	categoryName: string;
	totalActive: number;
	totalArchived: number;
};
export type Order = 'asc' | 'desc';
