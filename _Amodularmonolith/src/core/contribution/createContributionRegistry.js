export function createContributionRegistry() {
  const registry = new Map();

  function ensure(type) {
    if (!registry.has(type)) {
      registry.set(type, []);
    }

    return registry.get(type);
  }
  return Object.freeze({
    add(type, value) {
      ensure(type).push(value);
    },

    get(type) {
      return [...ensure(type)];
    },

    has(type) {
      return registry.has(type) && registry.get(type).length > 0;
    },

    clear(type) {
      registry.delete(type);
    },

    getAll() {
      return new Map(
        [...registry.entries()].map(([key, value]) => [key, [...value]]),
      );
    },
  });
}
