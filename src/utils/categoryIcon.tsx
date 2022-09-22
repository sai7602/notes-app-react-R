import React from 'react';
import {
	ShoppingCartTwoTone,
	TipsAndUpdatesTwoTone,
	FormatQuoteTwoTone,
	PsychologyTwoTone,
} from '@mui/icons-material';
const categoryIcon = (status: string) => {
	switch (status) {
		case 'Task':
			return <ShoppingCartTwoTone />;
		case 'Random Thought':
			return <PsychologyTwoTone />;
		case 'Quote':
			return <FormatQuoteTwoTone />;
		case 'Idea':
			return <TipsAndUpdatesTwoTone />;
		default:
			return <ShoppingCartTwoTone />;
	}
};
export default categoryIcon;
