import { createConfig } from "../../core/config/createConfig";
import { createEventBus } from "../../core/events/createEventBus";
import { createInstanceManager } from "../../core/renderer/instance/createInstanceManager.js";
import { initializeRendererRuntime } from "../../core/renderer/runtime/RenderRuntime.js";
import { createRenderStrategyRegistry } from "../../core/renderer/strategy/registerRenderStrategies.js";

import {
  createStoreService as StorageService,
  LocalStorageAdapter,
} from "../../core/storage";
import { StorePlugin } from "../../core/store";
import { ToastController } from "../../shared/components/Toast/ToastController";

export function registerCore(app) {
  const config = createConfig({
    debug: true,
    dev: true,
  });

  const events = createEventBus();

  const storage = StorageService(LocalStorageAdapter);

  const toastController = new ToastController(events);

  const renderStrategyRegistry = createRenderStrategyRegistry();

  const instanceManager = new createInstanceManager();

  initializeRendererRuntime({
    instanceManager,
    renderStrategyRegistry,
  });
  app
    .configure(config)
    .mount(document.querySelector("#app"))
    .use(StorePlugin)
    .register("events", events)
    .register("storage", storage)
    .register("toastController", toastController)
    .register("renderStrategyRegistry", renderStrategyRegistry)
    .register("instanceManager", instanceManager);
}
