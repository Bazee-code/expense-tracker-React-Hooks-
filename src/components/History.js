import React,{useContext} from 'react';

import {GlobalContext} from './context/Context.js';

export default function History() {

	const context = useContext(GlobalContext);
	const {transactions,deleteTransaction} = context;
	return (
		<div id ="accordion">
			<div className="card mt-2 text-center">
				<div className="card-header">
					<button className="btn btn-warning"
					data-toggle="collapse" data-target="#collapseOne" >
						HISTORY
					</button>
				</div>
				<div  id="collapseOne" className="collapse" data-parent="#accordion">
					<div className="card-body">
					{transactions.map(transaction=>(
						<div className="row" key={transaction.id}>
						<button className="btn btn-danger"
						onClick={()=>deleteTransaction(transaction.id)}><i>X</i></button>
							<p>{transaction.text}</p>
							<p className="ml-auto">${transaction.amount}</p>
						</div>
						))}
						
					</div>
				</div>
			</div>
		</div>
	)
}