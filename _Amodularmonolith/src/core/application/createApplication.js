import { inspectFramework } from "../debug/inspectFramework.js";

export function createApplication() {
  const state = {
    root: null,
    config: null,
    store: null,
    router: null,
    renderer: null,
    controllers: [],
    services: new Map(),
    plugins: [],
  };

  const app = {
    configure(config) {
      state.config = config;

      return app;
    },

    mount(root) {
      state.root = root;

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
      state.router?.start();
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
      return [...state, plugins];
    },
  };

  return app;
}
