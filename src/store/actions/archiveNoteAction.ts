import { ARCHIVE_NOTES } from '../constants/noteConstants';

export const archiveNoteAction = (id: string) => {
	return {
		type: ARCHIVE_NOTES,
		id,
	};
};
