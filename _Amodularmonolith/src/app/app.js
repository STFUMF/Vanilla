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
import { createRenderScheduler } from "../core/renderer/createRenderScheduler.js";
import { PerformanceProfiler } from "../core/performance/PerformanceProfiler.js";

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

  const renderer = createApplicationRenderer(root);

  RouterService.setRoutes(routes);

  const render = createRenderLoop({
    renderer,
    routerState,
    notFound,
    navigation,
    routes,
  });

  const scheduleRender = createRenderScheduler(render);

  todoController.setViewChangedListener(scheduleRender);
  toastController.setViewChangedListener(render);

  const router = createApplicationRouter(routes, routerState, scheduleRender);

  DebugService.register("router", router);
  DebugService.register("renderer", renderer);

  window.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === "z") {
      todoController.undo();
    }

    if (event.ctrlKey && event.shiftKey && event.key === "Z") {
      todoController.redo();
    }
  });

  store.subscribe(scheduleRender);
  return {
    renderer,
    router,
  };
}
