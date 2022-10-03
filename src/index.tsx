import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './index.css';
import CssBaseline from '@mui/material/CssBaseline';
const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<CssBaseline />
			<App />
		</Provider>
	</React.StrictMode>
);
