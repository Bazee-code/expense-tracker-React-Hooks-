import React,{useContext} from 'react';

import {GlobalContext} from './context/Context.js';

export default function Balance() {
	// access the context
	const context = useContext(GlobalContext);

	// console.log(context);
	const {transactions} = context;

	// balance (income-expenses)
	// loop through array get all the amounts and return as one using reduce func

	const amounts = transactions.map(transaction=>(
		transaction.amount));

	const income = amounts
	.filter(cur=>cur>0)
	.reduce((acc,cur)=>(acc += cur),0)
	.toFixed(2);

	const expenses = amounts
	.filter(cur=>cur<0)
	.reduce((acc,cur)=>(acc += cur),0)*(-1).toFixed(2);

	const balance = income - expenses;

	return (
		<div className="text-center py-2">
			<h3>Your balance</h3>
			<h3>${balance}</h3>
		</div>
	)
}