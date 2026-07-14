const registry = {};

export const DebugService = {
  register(name, value) {
    registry[name] = value;
  },

  get(name) {
    return registry[name];
  },

  inspect() {
    return registry;
  },
};
