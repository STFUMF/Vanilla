let config = null;

export const ConfigService = {
  set(configObject) {
    config = configObject;
  },

  get() {
    return config;
  },

  isDev() {
    return config?.dev ?? false;
  },

  isDebug() {
    return config?.debug ?? false;
  },

  isStrict() {
    return config?.strict ?? false;
  },
};
