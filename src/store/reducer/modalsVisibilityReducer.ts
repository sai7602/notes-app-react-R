import { DELETE_VISIBILITY, EDIT_VISIBILITY } from '../constants/modalConstant';

interface IModalAction {
	type: string;
	visibilityAddEditModal?: boolean;
	visibilityArchiveDelete?: boolean;
}
interface IModal {
	visibilityAddEditModal?: boolean;
	visibilityArchiveDelete?: boolean;
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

		default:
			return state;
	}
};
