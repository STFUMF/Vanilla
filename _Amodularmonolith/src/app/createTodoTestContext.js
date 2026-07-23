// tests/features/todo/createTodoTestContext.js

import { createStore } from "@core/store";
import { thunk } from "@core/store/middleware/thunk.js";

import { createStoreService, LocalStorageAdapter } from "@core/storage";
import { createEventBus } from "@core/events";
import { FakeApi } from "@core/api";

import { rootReducer } from "./registerStore.js";

import { TodoRepository } from "../features/todo/repository/TodoRepository.js";
import { TodoController } from "../features/todo/controllers/TodoController.js";
import { TodoService } from "../features/todo/services/TodoService.js";

import { createLoadTodos } from "../features/todo/store/thunks/loadTodos.js";
import { createAddTodoThunk } from "../features/todo/store/thunks/addTodoThunk.js";
import { createUpdateTodo } from "../features/todo/store/thunks/updateTodoThunk.js";
import { createDeleteTodo } from "../features/todo/store/thunks/deleteTodoThunk.js";
import { createToggleTodoThunk } from "../features/todo/store/thunks/toggleTodoThunk.js";

export function createTodoTestContext(initialTodos = []) {
  // Storage
  const storage = createStoreService(LocalStorageAdapter);
  storage.save("todos", initialTodos);

  // Events
  const events = createEventBus();

  // API
  const api = FakeApi(storage);

  // Repository
  const repository = new TodoRepository(api);

  // Service
  const service = new TodoService(repository);

  // Store
  const store = createStore(rootReducer, [thunk]);

  // Thunks
  const thunks = {
    loadTodos: createLoadTodos(service),
    addTodo: createAddTodoThunk(service),
    updateTodo: createUpdateTodo(service),
    deleteTodo: createDeleteTodo(service),
    toggleTodo: createToggleTodoThunk(service),
  };

  // Controller
  const controller = new TodoController(store, thunks, events);

  return {
    storage,
    api,
    repository,
    service,
    store,
    controller,
    events,
  };
}
