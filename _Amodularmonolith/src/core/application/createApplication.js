import { inspectFramework } from "../debug/inspectFramework.js";
import { createPluginContext } from "../plugin/PluginContext.js";
import { validatePlugin } from "../plugin/validatePlugin.js";

export function createApplication() {
  const state = {
    status: "created",
    root: null,
    config: null,
    store: null,
    router: null,
    renderer: null,
    controllers: [],
    services: new Map(),
    plugins: [],
  };

  const listeners = {
    created: [],
    configured: [],
    mounted: [],
    started: [],
    stopped: [],
  };

  const app = {
    configure(config) {
      state.config = config;
      state.status = "configured";
      emit("configured");
      return app;
    },

    mount(root) {
      state.root = root;
      state.status = "mounted";

      emit("mounted");
      return app;
    },

    attachStore(store) {
      state.store = store;

      return app;
    },

    attachRouter(router) {
      state.router = router;

      return app;
    },

    attachRenderer(renderer) {
      state.renderer = renderer;

      return app;
    },

    registerController(controller) {
      state.controllers.push(controller);

      return app;
    },

    registerService(name, service) {
      state.services.set(name, service);

      return app;
    },

    inspect() {
      inspectFramework(app);
    },

    start() {
      if (state.status === "started") {
        return app;
      }
      state.router?.start();
      state.status = "started";
      emit("started");
      return app;
    },

    stop() {
      state.router?.stop?.();
      return app;
    },

    getRoot() {
      return state.root;
    },

    getConfig() {
      return state.config;
    },

    getStore() {
      return state.store;
    },

    getRouter() {
      return state.router;
    },

    getRenderer() {
      return state.renderer;
    },

    getControllers() {
      return [...state.controllers];
    },

    getServices() {
      return state.services;
    },

    getPlugins() {
      return [...state.plugins];
    },

    getStatus() {
      return state.status;
    },

    on(event, listener) {
      listeners[event]?.push(listener);
      return app;
    },

    use(plugin) {
      validatePlugin(plugin);

      if (state.plugins.some((p) => p.name === plugin.name)) {
        console.warn(`Plugin "${plugin.name}" is already installed.`);
        return app;
      }

      const context = createPluginContext(app);

      plugin.install(context);
      emit("plugin:installed", plugin);
      state.plugins.push(plugin);

      return app;
    },
  };

  function emit(event) {
    listeners[event]?.forEach((listener) => listener(app));
  }

  return app;
}
