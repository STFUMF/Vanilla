// src/features/todo/controllers/TodoController.js

import { addTodo } from "../commands/addTodo.js";
import { deleteTodo } from "../commands/deleteTodo.js";
import { toggleTodo } from "../commands/toggleTodo.js";
import { updateTodo } from "../commands/updateTodo.js";

import { todoActions } from "../store/todoActionTypes.js";
import { todoSelectors } from "../store/todoSelectors.js";

export class TodoController {
    /**
     * @param {Store} store
     */
    constructor(store) {
        this.store = store;

        // View state
        this.title = "";

        // Edit UI state
        this.editingTodoId = null;
        this.editTitle = "";

        // View update callback
        this.onViewChanged = () => {};
    }

    /**
     * Loads the initial todos into the store.
     *
     * @param {Array} todos
     */
    loadTodos(todos) {
        this.store.dispatch(
            todoActions.set(todos)
        );
    }

    /**
     * Updates the current input value.
     *
     * @param {string} title
     */
    setTitle(title) {
        this.title = title;
        this.notifyViewChanged();
    }

    /**
     * Returns all todos.
     *
     * @returns {Array}
     */
    getTodos() {
        return todoSelectors.items(
            this.store.getState()
        );
    }

    /**
     * Returns statistics for the UI.
     *
     * @returns {{total:number, completed:number, remaining:number}}
     */
    getStats() {
        const state = this.store.getState();

        return {
            total: todoSelectors.total(state),
            completed: todoSelectors.completed(state).length,
            remaining: todoSelectors.remaining(state).length,
        };
    }

    /**
     * Adds a new todo.
     */
    addTodoc() {
        const title = this.title.trim();
        if (!title) {
            return;
        }

        addTodo(this.store, {
            id: crypto.randomUUID(),
            title,
            completed: false,
            dueDate: null,
            priority: "medium",
            category: null,
            tags: [],
            createdAt: Date.now(),
            updatedAt: Date.now(),
        });

        console.log(this.store.getState())
        this.title = "";
    }

    /**
     * Deletes a todo.
     *
     * @param {string} id
     */
    deleteTodoc(id) {
        deleteTodo(this.store, id);
    }

    /**
     * Toggles completion.
     *
     * @param {string} id
     */
    toggleTodoc(id) {
        toggleTodo(this.store, id);
        console.log('toggled')
    }

    startEditing(todo) {
        console.log('test')
        this.editingTodoId = todo.id;
        this.editTitle = todo.title;

        this.notifyViewChanged();
    }

    setEditTitle(title) {
        this.editTitle = title;

        this.notifyViewChanged();
    }

    cancelEditing() {
        this.editingTodoId = null;
        this.editTitle = "";

        this.notifyViewChanged();
    }

    isEditing(id) {
        return this.editingTodoId === id;
    }

    saveEdit(todo) {
        const title = this.editTitle.trim();

        if (!title){
            return;
        }
        updateTodo(this.store, {
            ...todo,
            title,
            updatedAt: Date.now(),
        });

        this.cancelEditing();
    }

    setViewChangedListener(listener) {
        this.onViewChanged = listener;
    }

    notifyViewChanged() {
        this.onViewChanged();
    }
}