import { Data } from '../../types';
import { ADD_NOTES } from '../constants/noteConstants';

export const addNoteAction = (payload: Data) => {
	return {
		type: ADD_NOTES,
		payload,
	};
};
