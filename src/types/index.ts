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

export type Order = 'asc' | 'desc';
