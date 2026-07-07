import { todoActions } from "../store/todoActionTypes.js";

export function addTodo(store, todo){
    store.dispatch(todoActions.add(todo))
}