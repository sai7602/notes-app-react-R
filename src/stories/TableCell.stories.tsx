import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import TableCell from './TableCell';

export default {
	title: 'Components/TableCell',
	component: TableCell,
	argTypes: {
		className: {
			table: {
				disable: true,
			},
		},
	},
} as ComponentMeta<typeof TableCell>;

export const Default: ComponentStory<typeof TableCell> = (props) => (
	<TableCell
		{...props}
		className={`${props.color || 'bg-gray-300'} ${
			props.rounded || 'rounded-none'
		}`}
	/>
);
