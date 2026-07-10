// this will contain the application startup logic

import { createRenderContext, createRenderer } from "../core/renderer";
import { component } from "../core/components/component.js";
import { registerRoutes } from "./registerRoutes.js";
import { createRouter, RouterService } from "@core/router";

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

  let currentRoute = null;

  function render() {
    const Page = currentRoute?.component ?? notFound;

    const props = currentRoute?.props ?? {};

    renderer.render(createRenderContext(component(Page, props)));
  }

  todoController.setViewChangedListener(render);

  const router = createRouter(
    routes,

    (route) => {
      currentRoute = route;
      render();
    },
  );

  store.subscribe(render);
  router.start();
}
