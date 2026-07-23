// src/features/todo/controllers/TodoController.js

import { EventTypes } from "../../../core/events/eventTypes.js";
import { TodoCategories } from "../constants/TodoCategories.js";
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
    this.currentLoadRequest = null;

    // View state
    this.title = "";
    this.category = TodoCategories.PERSONAL;

    // Edit UI state
    this.editingTodoId = null;
    this.editTitle = "";

    this.search = "";

    this.filters = {
      status: "all",
      priority: "all",
      category: TodoCategories.ALL,
      dueDate: "all",
    };

    this.sort = "created-desc";

    this.priority = "medium";

    this.dueDate = "";

    this.selectedTodoIds = new Set();

    // View update callback
    this.onViewChanged = () => {};
  }

  // ---------------------------------------------------------------------
  // Business Commands
  // ---------------------------------------------------------------------

  loadTodos() {
    this.currentLoadRequest?.cancel();

    const request = this.thunks.loadTodos();

    this.currentLoadRequest = request;

    return this.store.dispatch(request);
  }

  async addTodo(todo) {
    try {
      const result = await this.store.dispatch(this.thunks.addTodo(todo));

      this.events.emit(EventTypes.TODO_CREATED, {
        todo: result,
      });

      return result;
    } catch (error) {
      this.emitError("create", error);
      throw error;
    }
  }

  async updateTodo(todo) {
    try {
      const result = await this.store.dispatch(this.thunks.updateTodo(todo));

      this.events.emit(EventTypes.TODO_UPDATED, {
        todo: result,
      });

      return result;
    } catch (error) {
      this.emitError("update", error);
      throw error;
    }
  }

  async deleteTodo(todo) {
    try {
      const result = await this.store.dispatch(this.thunks.deleteTodo(todo));

      this.events.emit(EventTypes.TODO_DELETED, {
        todo,
      });

      return result;
    } catch (error) {
      this.emitError("delete", error);
      throw error;
    }
  }

  async toggleTodo(todo) {
    try {
      const result = await this.store.dispatch(this.thunks.toggleTodo(todo));
      this.events.emit(EventTypes.TODO_UPDATED, {
        todo: result,
      });

      return result;
    } catch (error) {
      this.emitError("toggle", error);
      throw error;
    }
  }

  // ---------------------------------------------------------------------
  // ViewModel Commands
  // ---------------------------------------------------------------------

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
      category: this.category,
      tags: [],

      archived: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    const result = await this.addTodo(todo);

    this.title = "";
    this.priority = "medium";
    this.dueDate = "";

    this.notifyViewChanged();

    return result;
  }

  startEditing(todo) {
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

  async saveEdit(todo) {
    const updatedTodo = {
      ...todo,
      title: this.editTitle.trim(),
      updatedAt: Date.now(),
    };

    const result = await this.updateTodo(updatedTodo);

    this.cancelEditing();

    return result;
  }

  async deleteTodoc(todo) {
    return this.deleteTodo(todo);
  }

  async toggleTodoc(todo) {
    return this.toggleTodo({
      ...todo,
      completed: !todo.completed,
      updatedAt: Date.now(),
    });
  }

  toggleSelection(id) {
    if (this.selectedTodoIds.has(id)) {
      this.selectedTodoIds.delete(id);
    } else {
      this.selectedTodoIds.add(id);
    }

    this.notifyViewChanged();
  }

  clearSelection() {
    this.selectedTodoIds.clear();
    this.notifyViewChanged();
  }

  isSelected(id) {
    return this.selectedTodoIds.has(id);
  }

  async deleteSelected() {
    return this.forEachSelected((todo) => this.deleteTodo(todo));
  }
  async completeSelected() {
    return this.forEachSelected((todo) =>
      this.toggleTodo({
        ...todo,
        completed: true,
      }),
    );
  }

  async archiveTodo(todo) {
    return this.updateTodo({
      ...todo,
      archived: true,
      updatedAt: Date.now(),
    });
  }

  async restoreTodo(todo) {
    return this.updateTodo({
      ...todo,
      archived: false,
      updatedAt: Date.now(),
    });
  }

  async archiveSelected() {
    return this.forEachSelected((todo) => this.archiveTodo(todo));
  }

  async forEachSelected(callback) {
    const todos = this.getSelectedTodos();

    for (const todo of todos) {
      await callback(todo);
    }

    this.clearSelection();
  }

  undo() {
    return this.store.undo();
  }

  redo() {
    return this.store.redo();
  }

  canUndo() {
    return this.store.canUndo();
  }

  canRedo() {
    return this.store.canRedo();
  }

  // ---------------------------------------------------------------------
  // View State
  // ---------------------------------------------------------------------

  setTitle(title) {
    this.title = title;
    this.notifyViewChanged();
  }
  setCategory(category) {
    this.category = category;
    this.notifyViewChanged();
  }

  setSearch(search) {
    this.search = search;
    this.notifyViewChanged();
  }

  setPriority(priority) {
    this.priority = priority;
    this.notifyViewChanged();
  }

  setDueDate(date) {
    this.dueDate = date;
    this.notifyViewChanged();
  }

  setStatusFilter(status) {
    this.filters = {
      ...this.filters,
      status,
    };

    this.notifyViewChanged();
  }

  setPriorityFilter(priority) {
    this.filters = {
      ...this.filters,
      priority,
    };

    this.notifyViewChanged();
  }

  setDueDateFilter(filter) {
    this.filters = {
      ...this.filters,
      dueDate: filter,
    };
    this.notifyViewChanged();
  }

  setCategoryFilter(category) {
    this.filters = {
      ...this.filters,
      category,
    };

    this.notifyViewChanged();
  }

  setSort(sort) {
    this.sort = sort;
    this.notifyViewChanged();
  }

  setViewChangedListener(listener) {
    this.onViewChanged = listener;
  }

  hasSelection() {
    return this.selectedTodoIds.size > 0;
  }

  selectAll() {
    this.selectedTodoIds = new Set(this.getTodos().map((todo) => todo.id));

    this.notifyViewChanged();
  }

  areAllSelected() {
    return (
      this.getTodos().length > 0 &&
      this.selectedTodoIds.size === this.getTodos().length
    );
  }

  notifyViewChanged() {
    this.onViewChanged();
  }

  // ---------------------------------------------------------------------
  // Selectors
  // ---------------------------------------------------------------------

  getTodos() {
    return todoSelectors.items(this.store.getState());
  }

  getVisibleTodos() {
    return todoSelectors.visible(
      this.store.getState(),
      this.search,
      this.filters,
      this.sort,
    );
  }
  getStatsWithoutArchive() {
    const state = this.store.getState();
    return {
      total: todoSelectors.active(this.store.getState()).length,
      completed: todoSelectors.completed(state).length,
      remaining: todoSelectors.remaining(state).length,
    };
  }

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

  getFilters() {
    return this.filters;
  }

  getSort() {
    return this.sort;
  }

  getPriority() {
    return this.priority;
  }

  getDueDate() {
    return this.dueDate;
  }

  getCategory() {
    return this.category;
  }

  getSelectedCount() {
    return this.selectedTodoIds.size;
  }

  getSelectedTodos() {
    return this.getTodos().filter((todo) => this.selectedTodoIds.has(todo.id));
  }

  getArchivedTodos() {
    return todoSelectors.archived(this.store.getState());
  }

  // ---------------------------------------------------------------------
  // Utilities
  // ---------------------------------------------------------------------

  reloadTodos() {
    return this.loadTodos();
  }

  emitError(operation, error) {
    this.events.emit(EventTypes.TODO_OPERATION_FAILED, {
      operation,
      error,
    });
  }
}
