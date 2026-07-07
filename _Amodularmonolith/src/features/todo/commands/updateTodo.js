import { todoActions } from "../store/todoActionTypes.js";

export function updateTodo(store, todo) {
    store.dispatch(todoActions.update(todo))
}