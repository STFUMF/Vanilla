import { todoActions } from "../store/todoActionTypes.js";


export function deleteTodo(store, id){
    store.dispatch(todoActions.remove(id))
}