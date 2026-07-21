import { createStore } from "@core/store";
import { createStoreService as StorageService } from "@core/storage";
import { LocalStorageAdapter } from "@core/storage";

import { TodoRepository } from "../../features/todo/repository/TodoRepository.js";
import { TodoController } from "../../features/todo/controllers/TodoController.js";
import { TodoService } from "../../features/todo/services/TodoService.js";

import { rootReducer } from "../../app/registerStore.js";
import { FakeApi } from "@core/api";
import { createLoadTodos } from "../../features/todo/store/thunks/loadTodos.js";
import { createAddTodoThunk } from "../../features/todo/store/thunks/addTodoThunk.js";
import { createUpdateTodo } from "../../features/todo/store/thunks/updateTodoThunk.js";
import { createDeleteTodo } from "../../features/todo/store/thunks/deleteTodoThunk.js";
import { createToggleTodoThunk } from "../../features/todo/store/thunks/toggleTodoThunk.js";

import { createConfig } from "@core/config";
import { createApplication } from "@core/application";
import { LoggerPlugin } from "@core/plugin/LoggerPlugin.js";
import { DebugPlugin } from "@core/debug/DebugPlugin.js";
import { InspectorPlugin } from "@core/plugin/InspectorPlugin.js";
import { TodoRoutesPlugin } from "../../features/todo/TodoRoutesPlugin.js";
import { DashboardRoutesPlugin } from "../../features/Dashboard/DashboardRoutesPlugin.js";
import { AboutRoutesPlugin } from "../../features/About/AboutRoutesPlugin.js";

import { ContributionTypes } from "@core/contribution";
import { NotFoundPage } from "../../shared/pages/NotFoundPage.js";
import { StorePlugin } from "@core/store/StorePlugin.js";
import { createEventBus } from "@core/events";
import { EventTypes } from "@core/events/eventTypes.js";
import { ToastController } from "../../shared/components/Toast/ToastController.js";
import { NotificationPlugin } from "@core/notifications/NotificationPlugin.js";
import { PerformanceProfiler } from "@core/performance/PerformanceProfiler.js";

export function createTodoTestContext(initialTodos = []) {
  // Clean storage before every test
  localStorage.clear();

  const app = createApplication();

  app.use(StorePlugin);

  const middleware = app.getContributions(ContributionTypes.MIDDLEWARE);

  const events = createEventBus();

  const storage = StorageService(LocalStorageAdapter);

  storage.save("todos", initialTodos);

  const api = FakeApi(storage);

  const repository = new TodoRepository(api);

  const service = new TodoService(repository);

  const store = createStore(rootReducer, middleware);

  const controller = new TodoController(
    store,
    {
      loadTodos: createLoadTodos(service),
      addTodo: createAddTodoThunk(service),
      updateTodo: createUpdateTodo(service),
      deleteTodo: createDeleteTodo(service),
      toggleTodo: createToggleTodoThunk(service),
    },
    events,
  );
  /* console.log("Middleware:", middleware);

  console.log("Dispatch === original?", store.dispatch.toString()); */

  return {
    app,
    events,
    storage,
    api,
    repository,
    service,
    store,
    controller,
  };
}
