import {SET_FILTER,
    SET_TODOS, ADD_TODO, REMOVE_TODO,
    SHOW_NOTIFICATON,
    HIDE_NOTIFICATION} from "../actions/actions";

export function setFilter(newFilter){
    return {type: SET_FILTER, activeFilter: newFilter}
}

export function setTodos(todos){
    return {type: SET_TODOS, todos}
}

export function addTodo(todo){
    return (dispatch) => {
        dispatch({type: ADD_TODO, todo});
        dispatch(showNotification("Eklendi"));
}}

export function removeTodo(id){
    return {type: REMOVE_TODO, id}
}

export function showNotification(text){
    return (dispatch) => {
        dispatch({type: SHOW_NOTIFICATON, text});
        setTimeout(() => {
            dispatch(hideNotification());
        }, 2000);
    }
}

export function hideNotification() {
    return {type: HIDE_NOTIFICATION}
}