import {ADD_TODO, TOGGLE_TODO, CLEAR_TODO} from "../actions"

const initialState = {
    todos:[
        {
            value: "REDUX",
            id: 0,
            completed: false
        }
    ],
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO: 
            const newTodo = {
                value: action.payload,
                id: Date.now(),
                completed: false

            }
            return {
                ...state,
                 todos: [...state.todos, newTodo]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    } else {
                        return todo
                    }
                })
            }
        case CLEAR_TODO: 
            const filterTodos = state.todos.filter(todo => !todo.completed)
            return {
                ...state,
                todos: filterTodos,
            }
        default:
            return state;
    }
}