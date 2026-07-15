export function createPluginContext(app) {
  return Object.freeze({
    getConfig: () => app.getConfig(),

    getStore: () => app.getStore(),

    getRouter: () => app.getRouter(),

    getRenderer: () => app.getRenderer(),

    getSerivces: () => app.getSerivces(),

    getControllers: () => app.getControllers(),

    register: app.registerServiceApp,

    resolve: app.resolveServiceApp,

    has: app.has,
    inspect: app.inspect,
    on: app.on,
  });
}
