import React from 'react';

// local
import './App.css';
import Header from './components/Header.js';
import Balance from './components/Balance.js';
import Income from './components/Income.js';
import History from './components/History.js';
import Transaction from './components/Transaction.js';

function App() {
	return (
		<div className="App">
		<div className="row">
			<div className="col-sm-4"></div>
			<div className="col-sm-4">
				<div className="card border-secondary mt-3">
					<div className="card-body">
						<Header />
						<Balance />
						<Income />
						<History />
						<Transaction />
					</div>
				</div>
			</div>
			<div className="col-sm-4"></div>
		</div>
		</div>
	);
}

export default App;
