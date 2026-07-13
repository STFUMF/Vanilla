const cache = new Map();

export function getCachedRoute(path) {
  return cache.get(path);
}

export function cacheRoute(path, route) {
  cache.set(path, route);
}
