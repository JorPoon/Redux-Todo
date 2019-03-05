

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_TODO = "CLEAR_TODO";

export const addTodo = newTodo => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

export const clearTodo = id => {
    return {
        type: CLEAR_TODO,
        payload: id
    }
}