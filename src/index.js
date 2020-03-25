import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalProvider} from './components/context/Context.js';

ReactDOM.render(
	<GlobalProvider>
		<App />
	</GlobalProvider>,
  document.getElementById('root')
);

