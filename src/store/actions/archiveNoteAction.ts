import { ARCHIVE_NOTES } from '../constants/noteConstants';

export const archiveNoteAction = (id: string) => {
	console.log('test', id);
	return {
		type: ARCHIVE_NOTES,
		id,
	};
};
