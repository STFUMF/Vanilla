import { createApp } from "./app";

import { createStore } from "../core/store";
import { thunk } from "../core/store/middleware/thunk.js";

import { createStoreService as StorageService } from "../core/storage";
import { LocalStorageAdapter } from "../core/storage";

import { TodoRepository } from "../features/todo/repository/TodoRepository.js";
import { TodoController } from "../features/todo/controllers/TodoController.js";
import { TodoService } from "../features/todo/services/TodoService.js";
import { todoActions } from "../features/todo/store/todoActionTypes.js";
import { createTodoPersistenceMiddleware as persistTodos } from "../features/todo/store/todoPersistenceMiddleware.js";

import { rootReducer } from "./registerStore.js";
import { FakeApi } from "../core/api";
import { createLoadTodos } from "../features/todo/store/thunks/loadTodos.js";

/**
 * Bootstraps starts the application.
 *
 * @param {object} store
 * @param {TodoService} todoService
 */

export function bootstrap() {
  // Storagea
  const storage = StorageService(LocalStorageAdapter);

  const api = FakeApi(storage);

  const todoRepository = new TodoRepository(api);

  // Service

  const todoService = new TodoService(todoRepository);

  // Store

  const store = createStore(rootReducer, [thunk, persistTodos(todoService)]);

  // Controller
  const loadTodos = createLoadTodos(todoService);

  const todoController = new TodoController(store, {
    loadTodos,
  });

  // Initial data
  // todoController.loadTodos(todoService.loadTodos());

  store.dispatch(loadTodos());

  // Start UI
  createApp({
    root: document.querySelector("#app"),
    store,
    todoController,
  });
}
