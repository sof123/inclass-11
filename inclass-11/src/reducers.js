
const Reducer = (state =  {
	nextId: 2,
	todoItems: [
	    {id: 0, text: "This is an item", done: false},
	    {id: 1, text: "Another item", done: false}
	]
}, action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return { ...state, nextId: state.nextId + 1,
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false}]
			}

		case 'REMOVE_TODO':
			var newState = JSON.parse(JSON.stringify(state));
			console.log("newstate is " + newState)
			newState.todoItems = newState.todoItems.filter((t) => t.id !== action.id);
			return newState;
		case 'TOGGLE_TODO':
		console.log(action.text)
		return { ...state,
				todoItems: state.todoItems.map(({ id, text, done }) => (
					{ id, text, done: action.id === id ? !done : done }
				))
			}
		default:
			return state
	}
}


export default Reducer
