const cache = new Map();

export const ComponentCache = {
  has(identity) {
    return cache.has(identity);
  },

  get(identity) {
    return cache.get(identity);
  },

  set(identity, entry) {
    cache.set(identity, entry);
  },

  delete(identity) {
    cache.delete(identity);
  },

  clear() {
    cache.clear();
  },

  entries() {
    return [...cache.entries()];
  },

  size() {
    return cache.size;
  },
};
