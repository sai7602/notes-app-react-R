import { DELETE_NOTES } from '../constants/noteConstants';

export const deleteNoteAction = (id: string) => {
	return {
		type: DELETE_NOTES,
		id,
	};
};
