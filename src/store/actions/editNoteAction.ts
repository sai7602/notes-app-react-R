import { Data } from '../../types';
import { EDIT_NOTES } from '../constants/noteConstants';

export const editNoteAction = (payload: Data) => {
	return {
		type: EDIT_NOTES,
		payload,
	};
};
