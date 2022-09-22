import { CHANGE_NOTE_ID } from '../constants/modalConstant';

export const changeNoteId = (id: string) => {
	console.log('first222222', id);
	return {
		type: CHANGE_NOTE_ID,
		id,
	};
};
