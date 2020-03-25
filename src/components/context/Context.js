import React,{useReducer} from 'react';

// local
import AppReducer from './reducer/reducer.js';

const initialState = {
	transactions : [
	{
		id:1,
		text : "console",
		amount : 300
	},
	{
		id:2,
		text: "internet",
		amount : -100
	}
	]
};

const GlobalContext = React.createContext(initialState);

const GlobalProvider =({children})=>{
	// useReducer gives us access to our state and dispatch
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// create our actions
	// actions are simply funcs that describe our objs
	function addTransaction(transaction){
		dispatch({
			type : "ADD_TRANSACTION",
			payload : transaction
		})
	}

	function deleteTransaction(id){
			dispatch({
				type : "DELETE_TRANSACTION",
				payload : id
			})
	};

	return (
		<GlobalContext.Provider value={{
			transactions : state.transactions,
			addTransaction,
			deleteTransaction
		}}>
			{children}
		</GlobalContext.Provider>
	)
};

export {GlobalContext,GlobalProvider};

// in react hooks ,our context api has a provider but no consumer
// we instead use the useContext method to access the providers contents
// globalcontext acts as our store

