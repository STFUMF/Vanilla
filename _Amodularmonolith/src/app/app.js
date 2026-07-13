// this will contain the application startup logic

import { createRenderContext, createRenderer } from "../core/renderer";
import { component } from "../core/components/component.js";
import { registerRoutes } from "./registerRoutes.js";
import { createRouter, RouterService } from "@core/router";
import { Loading } from "../shared/components/index.js";

/**
 * Starts the application UI.
 *
 * @param {object} options
 * @param {HTMLElement} options.root
 * @param {TodoController} options.todoController
 */

export function createApp({ root, store, todoController }) {
  const renderer = createRenderer(root);

  const { routes, notFound } = registerRoutes({
    todoController,
  });

  RouterService.setRoutes(routes);

  const routerState = {
    currentRoute: null,
    isRouteLoading: false,
    routeError: null,
  };

  function render() {
    const Page = routerState.currentRoute?.component ?? notFound;

    const props = routerState.currentRoute?.props ?? {};

    if (routerState.isRouteLoading) {
      renderer.render(createRenderContext(component(Loading)));
      return;
    }

    renderer.render(createRenderContext(component(Page, props)));
  }

  todoController.setViewChangedListener(render);

  const router = createRouter(
    routes,

    {
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

      onError(route) {
        routerState.isRouteLoading = false;
        routerState.routeError = error;
        render();
      },
    },
  );

  store.subscribe(render);
  router.start();
}
