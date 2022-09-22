import { Data } from '../../types';

export const activeNoteSelector = (state: any) =>
	state.notes.filter((note: Data) => !note.isArchived);
