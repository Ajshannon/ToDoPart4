import { ADD_TODO, TOGGLE } from '../actions';
import todos from '../todos.json';
//putting curly brackets around the import object means we are importing as an object. 


const initialState = { todos };

export const addToDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: 
            // ...state will create a new instance of state and then after the ',' the second parameter will add to that. 
            return {
                ...state,
                todos: [
                    ...state.todos,{
                        userId: 1,
                        id: (state.todos.length + 1),
                        title: action.text,
                        completed: false
                    }
                ],
            };
            
        case TOGGLE: 
            // ...state will create a new instance of state and then after the ',' the second parameter will add to that. 
            return {
                ...state,
                todos: [
                    ...state.todos.map(todo => todo.id === action.id ? {
                        ...todo,
                        completed: !todo.completed
                    } : todo)
                ]
            };
            
            
        default:
            return state;
    }
};