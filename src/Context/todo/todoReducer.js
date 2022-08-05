import {ADD_TODO, EDIT_TODO, REMOVE_TODO} from "../types";


export const handlers = {
    [ADD_TODO]: (state, {title}) => ({
        ...state,
        todos: [...state.todos, {
            id: Date.now().toString(),
            title
        }]
    }),
    [REMOVE_TODO]: (state, {id}) => ({
        ...state,
        todos: state.todos.filter(item => item.id !== id)
    }),
    [EDIT_TODO]: (state, {id, title}) => ({
        ...state,
        todos: state.todos.map(todo => {
            if (todo.id === id) {
                todo.title = title
            }
            return todo
        })
    }),
    DEFAULT: state => state
}


export const todoReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}