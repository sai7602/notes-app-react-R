const parseDate = (content: string): string => {
	console.log(content);
	const re = /\d{1,2}\/\d{1,2}\/\d{2,4}/gi;
	const res = content.match(re);
	console.log(
		res?.filter((e) => new Date(e).toString() !== 'Invalid Date').join(' ')
	);
	if (res) {
		return res
			.filter((e) => new Date(e).toString() !== 'Invalid Date')
			.join(', ');
	}
	return '';
};
export default parseDate;
