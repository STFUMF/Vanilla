import { createContributionRegistry } from "./createContributionRegistry.js";

const registry = createContributionRegistry();

export const ContributionService = Object.freeze({
  add(type, value) {
    registry.add(type, value);
  },

  get(type) {
    return registry.get(type);
  },

  has(type) {
    return registry.has(type);
  },

  clear(type) {
    registry.clear(type);
  },

  getAll() {
    return registry.getAll();
  },
});
