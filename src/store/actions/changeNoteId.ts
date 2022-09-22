import { CHANGE_NOTE_ID } from '../constants/modalConstant';

export const changeNoteId = (id: string) => {
	return {
		type: CHANGE_NOTE_ID,
		id,
	};
};
