import { Data } from '../../types';

export const archivedNoteSelector = (state: any) =>
	state.notes.filter((note: Data) => note.isArchived);
