import {ADD_TODO} from "../actions"

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
        default:
            return state;
    }
}