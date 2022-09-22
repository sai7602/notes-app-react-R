import { Data } from '../../types';

export const editedNoteSelector = (state: any, id: string) =>
	state.notes.filter((note: Data) => note.id === id);
