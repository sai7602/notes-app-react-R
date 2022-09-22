import initialData from './initialData';

export const loadState = () => {
	try {
		const savedState = localStorage.getItem('reduxState');

		if (savedState === null) {
			return initialData;
		}

		return JSON.parse(savedState).notes;
	} catch (error) {
		return undefined;
	}
};

export const saveState = (state: any) => {
	try {
		const stateToBeSaved = JSON.stringify(state);

		localStorage.setItem('reduxState', stateToBeSaved);
	} catch (error) {
		console.error(error);
	}
};

export const clearStorage = () => {
	try {
		localStorage.removeItem('reduxState');
	} catch (error) {
		console.error(error);
	}
};
