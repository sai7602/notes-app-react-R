import { Data } from '../types';
import parseDate from '../utils/parseDate';
import { faker } from '@faker-js/faker';
import categories from './categoryList';

const initialData: Data[] = new Array(20).fill({}).map(() => {
	const randomCategory = faker.datatype.number({
		min: 1,
		max: 4,
	});
	const selectedCategory = categories.filter(
		(cat) => cat.catId === `${randomCategory}`
	)[0];
	const fakeDate = faker.date
		.between('2022-08-08T00:00:00.000Z', '2022-09-12T00:00:00.000Z')
		.toLocaleDateString('en-us', {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
		});
	const fakeContent = `${faker.company.catchPhrase()} ${fakeDate} ${faker.company.name()}`;
	return {
		id: faker.datatype.uuid(),
		name: faker.commerce.product(),
		createDate: fakeDate,
		category: selectedCategory.catName,
		content: fakeContent,
		modificationDate: parseDate(fakeContent),
		isArchived: faker.datatype.boolean(),
	};
});

export default initialData;
