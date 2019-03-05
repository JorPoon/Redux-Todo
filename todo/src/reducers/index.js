import {ADD_TODO} from "../actions"

const initialState = {
    todos:[{
        todo: {
            text: "",
            completed: false
        }
    }],
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO: {
            return {
                ...state,
                // todos: [{...todo}, action.newTodo]
            }
        }
    }
}