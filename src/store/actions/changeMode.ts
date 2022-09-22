import { CHANGE_MODE } from '../constants/modalConstant';

export const changeMode = (mode: string) => {
	return {
		type: CHANGE_MODE,
		mode,
	};
};
