import { createUI } from "./app";

import { createStore } from "../core/store";
import { thunk } from "../core/store/middleware/thunk.js";

import { createStoreService as StorageService } from "../core/storage";
import { LocalStorageAdapter } from "../core/storage";

import { TodoRepository } from "../features/todo/repository/TodoRepository.js";
import { TodoController } from "../features/todo/controllers/TodoController.js";
import { TodoService } from "../features/todo/services/TodoService.js";

import { rootReducer } from "./registerStore.js";
import { FakeApi } from "../core/api";
import { createLoadTodos } from "../features/todo/store/thunks/loadTodos.js";
import { createAddTodoThunk } from "../features/todo/store/thunks/addTodoThunk.js";
import { createUpdateTodo } from "../features/todo/store/thunks/updateTodoThunk.js";
import { createDeleteTodo } from "../features/todo/store/thunks/deleteTodoThunk.js";
import { createToggleTodoThunk } from "../features/todo/store/thunks/toggleTodoThunk.js";

import { createConfig, ConfigService } from "@core/config";
import { DebugService } from "@core/debug";
import { inspectFramework } from "../core/debug/inspectFramework.js";
import { createApplication } from "@core/application";
import { registerRoutes } from "./registerRoutes.js";
import { LoggerPlugin } from "../core/plugin/LoggerPlugin.js";
import { DebugPlugin } from "../core/debug/DebugPlugin.js";
import { InspectorPlugin } from "../core/plugin/InspectorPlugin.js";

/**
 * Bootstraps starts the application.
 *
 * @param {object} store
 * @param {TodoService} todoService
 */

export function bootstrap() {
  const config = createConfig({
    debug: true,
    dev: true,
  });

  // Storagea
  const storage = StorageService(LocalStorageAdapter);

  const api = FakeApi(storage);

  const todoRepository = new TodoRepository(api);

  // Service

  const todoService = new TodoService(todoRepository);

  // Store

  const store = createStore(rootReducer, [thunk]);

  // Controller
  const todoThunks = {
    loadTodos: createLoadTodos(todoService),
    addTodo: createAddTodoThunk(todoService),
    updateTodo: createUpdateTodo(todoService),
    deleteTodo: createDeleteTodo(todoService),
    toggleTodo: createToggleTodoThunk(todoService),
  };

  const todoController = new TodoController(store, todoThunks);

  const app = createApplication()
    .configure(config)
    .mount(document.querySelector("#app"))
    .attachStore(store)
    .registerController(todoController)
    .registerService("todo", todoService);

  const { routes, notFound } = registerRoutes({
    todoController,
  });
  // Start UI
  const ui = createUI({
    root: app.getRoot(),
    store,
    routes,
    notFound,
    todoController,
  });

  app.attachRenderer(ui.renderer).attachRouter(ui.router);

  console.log(app.getStatus());

  app.on("started", () => {
    console.log("Frame work started");
  });

  app.use(LoggerPlugin).use(DebugPlugin).use(InspectorPlugin).start();

  // Initial data
  // todoController.loadTodos(todoService.loadTodos());

  store.dispatch(todoThunks.loadTodos());
}
