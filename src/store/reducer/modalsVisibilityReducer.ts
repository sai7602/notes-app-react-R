import {
	CHANGE_MODE,
	CHANGE_NOTE_ID,
	DELETE_VISIBILITY,
	EDIT_VISIBILITY,
} from '../constants/modalConstant';

interface IModalAction {
	type: string;
	visibilityAddEditModal?: boolean;
	visibilityArchiveDelete?: boolean;
	mode?: string;
	id?: string;
}
interface IModal {
	visibilityAddEditModal?: boolean;
	visibilityArchiveDelete?: boolean;
	mode?: string;
	id?: string;
}
export const modalsVisibilityReducer = (
	state: IModal = {},
	action: IModalAction
): IModal => {
	switch (action.type) {
		case EDIT_VISIBILITY: {
			const editedState = { ...state };
			editedState.visibilityAddEditModal =
				!editedState.visibilityAddEditModal;
			return editedState;
		}
		case DELETE_VISIBILITY: {
			const editedState = { ...state };
			editedState.visibilityArchiveDelete =
				!editedState.visibilityArchiveDelete;
			return editedState;
		}
		case CHANGE_MODE: {
			const editedState = { ...state };
			editedState.mode = action.mode;
			return editedState;
		}
		case CHANGE_NOTE_ID: {
			const editedState = { ...state };
			editedState.id = action.id;
			return editedState;
		}

		default:
			return state;
	}
};
