import { createUI } from "./app";

import { createStore } from "../core/store";
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

import { createConfig } from "@core/config";
import { createApplication } from "@core/application";
import { LoggerPlugin } from "../core/plugin/LoggerPlugin.js";
import { DebugPlugin } from "../core/debug/DebugPlugin.js";
import { InspectorPlugin } from "../core/plugin/InspectorPlugin.js";
import { TodoRoutesPlugin } from "../features/todo/TodoRoutesPlugin.js";
import { DashboardRoutesPlugin } from "../features/Dashboard/DashboardRoutesPlugin.js";
import { AboutRoutesPlugin } from "../features/About/AboutRoutesPlugin.js";

import { ContributionTypes } from "@core/contribution";
import { NotFoundPage } from "../shared/pages/NotFoundPage.js";
import { StorePlugin } from "../core/store/StorePlugin.js";
import { createEventBus } from "@core/events";
import { EventTypes } from "../core/events/eventTypes.js";
import { ToastController } from "../shared/components/Toast/ToastController.js";
import { NotificationPlugin } from "../core/notifications/NotificationPlugin.js";

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
  const events = createEventBus();
  const storage = StorageService(LocalStorageAdapter);
  const api = FakeApi(storage);
  const todoRepository = new TodoRepository(api);
  const todoService = new TodoService(todoRepository);

  // Controller
  const todoThunks = {
    loadTodos: createLoadTodos(todoService),
    addTodo: createAddTodoThunk(todoService),
    updateTodo: createUpdateTodo(todoService),
    deleteTodo: createDeleteTodo(todoService),
    toggleTodo: createToggleTodoThunk(todoService),
  };

  const toastController = new ToastController(events);
  const app = createApplication();

  app
    .configure(config)
    .mount(document.querySelector("#app"))
    .use(StorePlugin)
    .register("events", events);

  const middleware = app.getContributions(ContributionTypes.MIDDLEWARE);
  // Store
  const store = createStore(rootReducer, middleware);

  const todoController = new TodoController(store, todoThunks, events);

  app
    .attachStore(store)
    .register("store", store)
    .register("todoService", todoService)
    .register("todoController", todoController)
    .register("toastController", toastController);

  app
    .use(LoggerPlugin)
    .use(DebugPlugin)
    .use(InspectorPlugin)
    .use(NotificationPlugin)
    .use(DashboardRoutesPlugin)
    .use(TodoRoutesPlugin)
    .use(AboutRoutesPlugin);

  const routes = app.getContributions(ContributionTypes.ROUTES);
  const navigation = app.getContributions(ContributionTypes.NAVIGATION);

  console.log(toastController);
  // Start UI
  const ui = createUI({
    root: app.getRoot(),
    store,
    routes,
    navigation,
    notFound: NotFoundPage,
    todoController,
    toastController,
  });

  app
    .attachRenderer(ui.renderer)
    .attachRouter(ui.router)
    .register("renderer", ui.renderer)
    .register("router", ui.router);

  app.on("started", () => {
    console.log("Frame work started");
  });

  console.log(app.getRegistry());
  app.start();

  // Initial data
  // todoController.loadTodos(todoService.loadTodos());

  events.on(EventTypes.TOAST_SHOW, (payload) => {
    console.log("TOAST EVENT:", payload);
  });

  store.dispatch(todoThunks.loadTodos());
}
