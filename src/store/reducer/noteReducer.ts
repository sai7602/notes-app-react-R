import type { Data } from '../../types';
import {
	ADD_NOTES,
	ARCHIVE_NOTES,
	DELETE_NOTES,
	EDIT_NOTES,
} from '../constants/noteConstants';

interface NoteAction {
	type: string;
	payload?: any;
	id?: string;
}

export const noteReducer = (state: Data[] = [], action: NoteAction): Data[] => {
	switch (action.type) {
		case ARCHIVE_NOTES: {
			return state.map((note: Data) => {
				const editedNote = { ...note };
				if (editedNote.id === action.id) {
					editedNote.isArchived = !editedNote.isArchived;
				}
				return editedNote;
			});
		}
		case ADD_NOTES:
			return [...state, action.payload];
		case EDIT_NOTES: {
			return state.map((note: Data) => {
				if (note.id === action.payload.id) {
					return { ...note, ...action.payload };
				}
				return note;
			});
		}
		case DELETE_NOTES:
			return [...state.filter((note: Data) => note.id !== action.id)];

		default:
			return state;
	}
};
