// src/features/todo/controllers/TodoController.js

import { EventTypes } from "../../../core/events/eventTypes.js";
import { todoSelectors } from "../store/todoSelectors.js";

export class TodoController {
  /**
   * @param {Store} store
   */

  /// rename actions to thunks
  constructor(store, thunks, events) {
    this.store = store;

    this.thunks = thunks;
    this.events = events;

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
  async addTodoc() {
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

    try {
      const result = await this.store.dispatch(this.thunks.addTodo(todo));

      this.events.emit(EventTypes.TODO_CREATED, {
        todo: result,
      });

      return result;
    } catch (error) {
      this.events.emit(EventTypes.TOAST_SHOW, {
        operation: "create",
        error,
      });
      throw error;
    }

    this.title = "";
    this.priority = "medium";
    this.dueDate = "";
  }

  /**
   * Deletes a todo.
   *
   * @param {string} id
   */
  async deleteTodoc(id) {
    try {
      const result = await this.store.dispatch(this.thunks.deleteTodo(id));
      this.events.emit(EventTypes.TODO_DELETED, { todo: id });

      return result;
    } catch (error) {
      this.emitError("update", error);
      throw error;
    }
  }

  /**
   * Toggles completion.
   *
   * @param {string} id
   */
  async toggleTodoc(todo) {
    try {
      const result = await this.store.dispatch(this.thunks.toggleTodo(todo));
      this.events.emit(EventTypes.TODO_UPDATED, { todo: result });

      return result;
    } catch (error) {
      this.emitError("update", error);
      throw error;
    }
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
    try {
      const updatedTodo = {
        ...todo,
        title: this.editTitle.trim(),
      };
      const result = this.store.dispatch(
        this.thunks.updateTodo(todo, updatedTodo),
      );
      this.events.emit(EventTypes.TODO_UPDATED, { todo: result });
      this.cancelEditing();
      return result;
    } catch (error) {
      this.emitError("update", error);
      throw error;
    }

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

  emitError(operation, error) {
    this.events.emit(EventTypes.TODO_OPERATION_FAILED, {
      operation,
      error,
    });
  }
}
