import { loadRoute } from "./loadRoute.js";

export async function prefetchRoute(routes, path) {
  const route = routes.find((route) => route.path === path);

  if (!route || route.component) {
    return;
  }

  await loadRoute(route);
}
