import { todoActions } from "../store/todoActionTypes.js";

export function toggleTodo(store, id) {
    store.dispatch(todoActions.toggle(id));
}