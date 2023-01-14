
const GlobalReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TODO":

            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case "DELETE_TODO":
            console.log(action.payload);
            return {
                ...state,
                todos: (state.todos.filter(item => item.id !== action.payload))
            }
        case "EDIT_TODO":
            return {
                ...state,
                Edit: { todo: action.payload, isEdit: true }
            }
        case "UPDATE_TODO":
            return {
                todos: state.todos.map((item) => item.id === action.payload.id ? { ...item, text: action.payload.text } : item),
                Edit: { todo: {}, isEdit: false }
            }

        default:
            return state
    }

}
export default GlobalReducer