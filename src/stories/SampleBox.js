import React from 'react';
import { Button } from '@mui/material';
export const SampleBox = ({ children }) => {
	return (
		<Button
			// color="primary"
			className="flex text-red-600 border-2 w-24 justify-center"
		>
			{children}
		</Button>
	);
};
