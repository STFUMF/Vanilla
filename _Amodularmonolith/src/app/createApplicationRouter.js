import { createRouter } from "@core/router";

export function createApplicationRouter(routes, routerState, render) {
  return createRouter(routes, {
    onLoading() {
      routerState.routeError = null;
      routerState.isRouteLoading = true;
      render();
    },

    onChange(route) {
      routerState.currentRoute = route;
      routerState.isRouteLoading = false;
      render();
    },

    onError(error) {
      routerState.isRouteLoading = false;
      routerState.routeError = error;
      render();
    },
  });
}
