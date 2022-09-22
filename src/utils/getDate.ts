const getDate = () => {
	const date = new Date().toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	});

	return date;
};

export default getDate;
