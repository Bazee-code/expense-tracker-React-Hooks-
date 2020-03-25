import React,{useContext} from 'react';

import {GlobalContext} from './context/Context.js';

export default function Income() {
	// access our context
	const context = useContext(GlobalContext);
	// console.log(context);
	const {transactions} = context;

	// we now get all the amounts in our transactions array
	const amounts = transactions.map(transaction=>(
		transaction.amount));
	// console.log(amounts);
 	//calculate income
 	const income = amounts
 	.filter(cur=>cur>0)
 	.reduce((acc,cur)=>(acc += cur),0)
 	.toFixed(2);

 	const expense = amounts
 	.filter(cur=>cur<0)
 	.reduce((acc,cur)=>(acc += cur),0)*(-1)
 	.toFixed(2);

	return (
		<div className="row text-center mt-2">
			<div className="col-md-6">
				<h4>INCOME</h4>
				<h4 className="text-success">${income}</h4>
			</div>
			<div className="col-md-6">
				<h4>EXPENSES</h4>
				<h4 className="text-danger">${expense}</h4>
			</div>
		</div>
	)
}