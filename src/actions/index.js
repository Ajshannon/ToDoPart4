export const ADD_TODO = 'ADD_TODO';
export const TOGGLE = 'TOGGLE';

export const addTodo = (text, id) => {
    return{
    type: ADD_TODO,
    text,
    id
    }
};

export const toggleToDo = (id) => {
    return{
    type: TOGGLE,
    id,
    }
};

//when its a default object you dont need to destructure it

//˜