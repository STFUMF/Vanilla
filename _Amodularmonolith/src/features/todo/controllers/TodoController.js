import { todoActions } from "../store/todoActionTypes.js";
import { todoSelectors } from "../store/todoSelectors.js";

export class TodoController {
    /**
     * @param {Object} store
     */
    constructor(store) {
        this.store = store;
    }

    getState() {
        return this.store.getState();
    }

    getTodos() {
        return todoSelectors.items(this.getState());
    }

    getStats() {
        const state = this.getState();

        return {
            total: todoSelectors.total(state),
            completed: todoSelectors.completed(state).length,
            remaining: todoSelectors.remaining(state).length,
        };
    }

    addTodo(todo){
        this.store.dispatch(
            todoActions.add(todo)
        );
    }

    updateTodo(todo) {
        this.store.dispatch(todoActions.update(todo));
    }

    deleteTodo(id){
        this.store.dispatch(todoActions.remove(id));
    }

    toggleTodo(id) {
        this.store.dispatch(todoActions.toggle(id));
    }

    loadTodos(todos) {
        this.store.dispatch(todoActions.set(todos))
    }
}