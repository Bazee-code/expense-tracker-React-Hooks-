import React,{useState,useContext}from 'react';

import {GlobalContext} from './context/Context.js';

export default function Transaction() {

	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);

	const context = useContext(GlobalContext);
	const {addTransaction} = context;
	const handleSubmit = (e)=>{
		// prevent default behaviour of attaching using info to url 
		// and also reloading user page
		e.preventDefault();

		const newTransaction = {
			id : Math.floor(Math.random()*100),
			text : text,
			amount : +amount
		};
		addTransaction(newTransaction);
	};

	return (
		<div className="mt-3">
			<p><u>Add New Transaction</u></p>
			<form onSubmit ={handleSubmit}>
				<label>Text</label>
				<input placeholder="Enter text..." name="text"
				className="form-control" value={text}
				onChange={(e)=>{setText(e.target.value)}}/>
				<label>Amount(negative:expense,positive:income)</label>
				<input placeholder="Enter amount..." name="amount"
				className="form-control" value={amount}
				onChange={(e)=>{setAmount(e.target.value)}}/>
				<button className="btn btn-warning form-control mt-3">
					Add Transaction
				</button>
			</form>
		</div>
	)
}

// we are using react hooks to get the state of our components
// react hooks give our functional components state
