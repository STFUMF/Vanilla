export function createPluginContext(app) {
  return Object.freeze({
    app,

    getConfig: () => app.getConfig(),

    getStore: () => app.getStore(),

    getRouter: () => app.getRouter(),

    getRenderer: () => app.getRenderer(),

    getSerivces: () => app.getSerivces(),

    controllers: () => app.getControllers(),

    on: app.on,
  });
}
