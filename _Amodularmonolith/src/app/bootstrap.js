import { createUI } from "./app";

import { createStore } from "../core/store";
import { createStoreService as StorageService } from "../core/storage";
import { LocalStorageAdapter } from "../core/storage";

import { TodoRepository } from "../features/todo/repository/TodoRepository.js";
import { TodoController } from "../features/todo/controllers/TodoController.js";
import { TodoService } from "../features/todo/services/TodoService.js";

import { rootReducer } from "./registerStore.js";
import { FakeApi } from "../core/api";

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
import { PerformanceProfiler } from "../core/performance/PerformanceProfiler.js";

/* import "../tests/router/matcher.test.js";
import "../tests/renderer/component.test.js";
import "../tests/renderer/renderer.test.js";
import "../tests/renderer/renderingPipeline.test.js";
import "../tests/integration/todoTest.test.js";
import "../tests/plugin.test.js"; */

import "../tests/history.test.js";

//import "../tests/controller/controller.test.js";
import { runTests } from "../core/testing/index.js";
import { ArchivePlugin } from "../features/todo/pages/Archived/ArchivePlugin.js";
import { TodoPlugin } from "../features/todo/TodoPlugin.js";
import { registerCore } from "./bootstrap/registerCore.js";
import { registerFeatures } from "./bootstrap/registerFeatures.js";
import { createInterface } from "./bootstrap/createInterface.js";

/**
 * Bootstraps starts the application.
 *
 * @param {object} store
 * @param {TodoService} todoService
 */

export function bootstrap() {
  const testTing = true;
  const app = createApplication();

  registerCore(app);

  const middleware = app.getContributions(ContributionTypes.MIDDLEWARE);

  const store = createStore(rootReducer, middleware);

  app.attachStore(store).register("store", store);

  registerFeatures(app);

  createInterface(app);

  app.on("started", () => {
    console.log("Framework started");
  });

  const registry = app.resolve("renderStrategyRegistry");

  console.log(registry);

  const manager = app.resolve("instanceManager");

  console.log(manager);

  app.start();

  //runTests();
}
