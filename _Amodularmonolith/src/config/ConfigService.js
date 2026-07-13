let config = null;

export const ConfigService = {
  set(configObject) {
    config = configObject;
  },

  get() {
    return config;
  },
};
