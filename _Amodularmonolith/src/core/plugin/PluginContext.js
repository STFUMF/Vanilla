export function createPluginContext(app) {
  return Object.freeze({
    getConfig: () => app.getConfig(),

    getStore: () => app.getStore(),

    getRouter: () => app.getRouter(),

    getRenderer: () => app.getRenderer(),

    getSerivces: () => app.getSerivces(),

    getControllers: () => app.getControllers(),

    on: app.on,
    inspect: app.inspect,
  });
}
