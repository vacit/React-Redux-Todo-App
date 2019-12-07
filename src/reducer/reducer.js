import {SET_FILTER, SET_TODOS, ADD_TODO, REMOVE_TODO, SHOW_NOTIFICATON, HIDE_NOTIFICATION} from "../actions/actions";

const rootReducer = function (state = {
    activeFilter: "all",
    todos: [],
    notificationVisibility: false,
    notificationText: ""
}, action) {
    switch (action.type) {
        case SET_FILTER:
            return {...state, activeFilter: action.activeFilter};
        case SET_TODOS:
            return {...state, todos: action.todos}
        case ADD_TODO:
            return {...state, todos: state.todos.concat([action.todo])}
        case REMOVE_TODO:
            const newTodos = state.todos.filter((todo) => todo.id !== action.id);
            return {
                ...state,
                todos: newTodos
            };
        case SHOW_NOTIFICATON:
            return {
                ...state,
                notificationVisibility: true,
                notificationText: action.text
            }
        case HIDE_NOTIFICATION:
            return {
                ...state,
                notificationVisibility: false,
                notificationText: ""
            }
        default:
            return state;
    }

};

export default rootReducer