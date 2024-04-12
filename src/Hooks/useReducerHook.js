import React, { useReducer, useState } from "react";

// Defining the initial state and the reducer

//input: 2, minus1
//output: 1
const reducer = (state, action) => {
	switch (action) {
		case "plus":
			return state + 1;
		case "minus":
			return state - 1;
		case "clear":
			return 0;
		default:
			throw new Error("Unexpected action");
	}
};

const initialState = 0;
// var count = 0;
// count = 1;

const UseReducerHook = () => {
	// Initialising useReducer hook & create a statefull variable
	const [count, dispatch] = useReducer(reducer, initialState);//1

	//var [count, IncrementDecrementCount] = useState(0);

	return (
		<div>
			
			<h1>with useReducer()</h1>
			<h2>{count}</h2>
			<button onClick={() => dispatch("plus")}>
				Increment
			</button>
			<button onClick={() => dispatch("minus")}>
				Decrement
			</button>
			<button onClick={() => dispatch("clear")}>
				Clear
			</button> 
			
			{/* <h1>without useReducer()</h1>
			<h2>{count}</h2>
			<button onClick={() => IncrementDecrementCount(count++)}>
				Increment
			</button>
			<button onClick={() => IncrementDecrementCount(count--)}>
				Decrement
			</button>
			<button onClick={() => IncrementDecrementCount(0)}>
				Clear
			</button> */}
		</div>
	);
};

export default UseReducerHook;
