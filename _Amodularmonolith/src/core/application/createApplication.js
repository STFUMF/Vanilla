import { inspectFramework } from "../debug/inspectFramework.js";
import { createPluginContext } from "../plugin/PluginContext.js";
import { validatePlugin } from "../plugin/validatePlugin.js";
import { createContributionRegistry } from "@core/contribution";

export function createApplication() {
  const contributions = createContributionRegistry();
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

    registry: new Map(),
  };

  const listeners = {
    created: [],
    configured: [],
    mounted: [],
    started: [],
    stopped: [],

    "plugin:installed": [],
    "contribution:added": [],
    "registry:registered": [],
    "registry:unregistered": [],
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
      inspectFramework(this);
      return app;
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

      state.status = "stopped";
      emit("stopped");

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

      state.plugins.push(plugin);

      const context = createPluginContext(app);

      plugin.install(context);

      emit("plugin:installed", plugin);

      return app;
    },

    register(name, value) {
      if (!name) {
        throw new Error("Registry name is required");
      }

      if (state.registry.has(name)) {
        throw new Error(`"${name}" is already registered.`);
      }

      state.registry.set(name, value);

      emit("registry:registered", {
        name,
        value,
      });

      return app;
    },

    resolve(name) {
      return state.registry.get(name);
    },

    has(name) {
      return state.registry.has(name);
    },

    unregister(name) {
      const value = state.registry.get(name);

      state.registry.delete(name);

      emit("registry:unregistered", { name, value });
      return app;
    },

    getRegistry() {
      return new Map(state.registry);
    },

    contribute(type, value) {
      contributions.add(type, value);

      emit("contribution:added", {
        type,
        value,
      });

      return app;
    },
    getContributions(type) {
      return contributions.get(type);
    },

    hasContributions(type) {
      return contributions.has(type);
    },

    clearContributions(type) {
      contributions.clear(type);

      return app;
    },

    getAllContributions() {
      return contributions.getAll();
    },

    contributeMany(type, values) {
      values.forEach((value) => app.contribute(type, value));

      emit("contribution:added", { type, values });
      return app;
    },
  };

  function emit(event) {
    listeners[event]?.forEach((listener) => listener(app));
  }

  return app;
}
