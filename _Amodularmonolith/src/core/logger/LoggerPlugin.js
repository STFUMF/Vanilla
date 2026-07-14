export const LoggerPlugin = {
  install(app) {
    Logger.info(`${app.config.name} v${app.config.version} initialized`);
  },
};
