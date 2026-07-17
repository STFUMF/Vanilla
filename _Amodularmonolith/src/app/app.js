// this will contain the application startup logic

import { createRenderContext, createRenderer } from "../core/renderer";
import { component } from "../core/components/component.js";
import { registerRoutes } from "./registerRoutes.js";
import { createRouter, RouterService } from "@core/router";
import { DebugService } from "@core/debug";
import { inspectFramework } from "../core/debug/inspectFramework.js";
import { createApplicationRenderer } from "./createApplicationRenderer.js";
import { createRenderLoop } from "./createRenderLoop.js";
import { createApplicationRouter } from "./createApplicationRouter.js";

/**
 * Starts the application UI.
 *
 * @param {object} options
 * @param {HTMLElement} options.root
 * @param {TodoController} options.todoController
 */

export function createUI({
  root,
  store,
  routes,
  navigation,
  notFound,
  todoController,
  toastController,
}) {
  const routerState = {
    currentRoute: null,
    isRouteLoading: false,
    routeError: null,
  };
  console.log("UI nagivation:", navigation);
  const renderer = createApplicationRenderer(root);

  RouterService.setRoutes(routes);

  const render = createRenderLoop({
    renderer,
    routerState,
    notFound,
    navigation,
    routes,
  });

  todoController.setViewChangedListener(render);
  toastController.setViewChangedListener(render);

  const router = createApplicationRouter(routes, routerState, render);

  DebugService.register("router", router);
  DebugService.register("renderer", renderer);

  store.subscribe(render);

  return {
    renderer,
    router,
  };
}
