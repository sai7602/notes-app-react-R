import { configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from '../data/local-storage';
import { modalsVisibilityReducer } from './reducer/modalsVisibilityReducer';

import { noteReducer } from './reducer/noteReducer';

const reducer = {
	modalVisibility: modalsVisibilityReducer,
	notes: noteReducer,
};
const store = configureStore({
	reducer,
	preloadedState: {
		notes: loadState(),
		modalVisibility: {
			visibilityAddEditModal: false,
			visibilityArchiveDelete: false,
			mode: '',
			id: '',
		},
	},
});
store.subscribe(() => {
	saveState({
		notes: store.getState().notes,
	});
});
export { store };
