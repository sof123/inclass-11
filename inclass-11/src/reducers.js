
const Reducer = (state =  {
	nextId: 2,
	todoItems: [
	    {id: 0, text: "This is an item", done: false},
	    {id: 1, text: "Another item", done: false}
	]
}, action) => {
	switch(action.type) {
		case 'ADD_TODO':
			var newState = JSON.parse(JSON.stringify(state));
			newState.nextId +=1;
			newState.todoItems[newState.nextId-1] = {id: newState.nextId, text: action.text, done: false}; 
			return newState;
			
		case 'REMOVE_TODO':
			var newState = JSON.parse(JSON.stringify(state));
			console.log("newstate is " + newState)
			newState.todoItems = newState.todoItems.filter((t) => t.id !== action.id);
			return newState;
		case 'TOGGLE_TODO':
		
			var newState = JSON.parse(JSON.stringify(state));
			newState.todoItems[action.id].done = !state.todoItems[action.id].done;
			return newState;
		default: 
			return state
	}
}

export default Reducer