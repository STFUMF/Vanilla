// src/features/todo/controllers/TodoController.js

import { todoSelectors } from "../store/todoSelectors.js";

export class TodoController {
  /**
   * @param {Store} store
   */

  /// rename actions to thunks
  constructor(store, thunks) {
    this.store = store;

    this.thunks = thunks;

    // View state
    this.title = "";

    // Edit UI state
    this.editingTodoId = null;
    this.editTitle = "";

    this.search = "";

    this.filters = {
      status: "all",
      priority: "all",
      dueDate: "all",
    };

    this.sort = "created-desc";

    this.priority = "medium";

    this.dueDate = "";

    // View update callback
    this.onViewChanged = () => {};
  }

  /**
   * Loads the initial todos into the store.
   *
   * @param {Array} todos
   */

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
    return todoSelectors.items(this.store.getState());
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

  isLoading() {
    return todoSelectors.loading(this.store.getState());
  }

  getError() {
    return todoSelectors.error(this.store.getState());
  }

  reloadTodos() {
    this.store.dispatch(this.thunks.loadTodos());
  }

  /**
   * Adds a new todo.
   */
  addTodoc() {
    const title = this.title.trim();
    if (!title) {
      return;
    }

    const todo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      dueDate: this.dueDate || null,
      priority: this.priority,
      category: null,
      tags: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    this.store.dispatch(this.thunks.addTodo(todo));

    this.title = "";
    this.priority = "medium";
    this.dueDate = "";
  }

  /**
   * Deletes a todo.
   *
   * @param {string} id
   */
  deleteTodoc(todo) {
    this.store.dispatch(this.thunks.deleteTodo(todo));
  }

  /**
   * Toggles completion.
   *
   * @param {string} id
   */
  toggleTodoc(todo) {
    this.store.dispatch(this.thunks.toggleTodo(todo));
  }

  startEditing(todo) {
    console.log("test");
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
    const updatedTodo = {
      ...todo,
      title: this.editTitle.trim(),
    };

    this.store.dispatch(this.thunks.updateTodo(todo, updatedTodo));
    console.log("saved todocontroller");
    this.cancelEditing();
    /* const title = this.editTitle.trim();

    if (!title) {
      return;
    }
    updateTodo(this.store, {
      ...todo,
      title,
      updatedAt: Date.now(),
    });

    this.cancelEditing(); */
  }

  setViewChangedListener(listener) {
    this.onViewChanged = listener;
  }

  notifyViewChanged() {
    this.onViewChanged();
  }

  setSearch(search) {
    this.search = search;
    this.notifyViewChanged();
  }

  getVisibleTodos() {
    return todoSelectors.visible(
      this.store.getState(),
      this.search,
      this.filters,
      this.sort,
    );
  }

  setStatusFilter(status) {
    this.filters.status = status;
    this.notifyViewChanged();
  }

  setPriorityFilter(priority) {
    this.filters.priority = priority;
    this.notifyViewChanged();
  }

  setDueDateFilter(filter) {
    this.filters.dueDate = filter;
    this.notifyViewChanged();
  }

  getFilters() {
    return this.filters;
  }

  setSort(sort) {
    this.sort = sort;
    this.notifyViewChanged();
  }

  getSort() {
    return this.sort;
  }

  setPriority(priority) {
    this.priority = priority;
    this.notifyViewChanged();
  }

  getPriority() {
    return this.priority;
  }

  setDueDate(date) {
    this.dueDate = date;
    this.notifyViewChanged();
  }

  getDueDate() {
    return this.dueDate;
  }
}
