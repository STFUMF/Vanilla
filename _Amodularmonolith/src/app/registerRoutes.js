import { createRoute } from "../core/router";

import { AboutPage } from "../features/About/pages/AboutPage.js";
import { NotFoundPage } from "../shared/pages/NotFoundPage.js";
import { TodoPage } from "../features/todo/pages/TodoPage.js";
import { DashboardPage } from "../features/Dashboard/pages/DashboardPage.js";

/**
 * Regisers all application routes.
 *
 * @returns {object}
 */
export function registerRoutes({ todoController }) {
  return {
    routes: [
      createRoute(
        "/",
        DashboardPage,
        { controller: todoController },
        { title: "Dashboard", navigation: true },
      ),
      createRoute(
        "/todos",
        TodoPage,
        { controller: todoController },
        { title: "Todos", navigation: true },
      ),

      createRoute(
        "/about",
        AboutPage,
        {},
        { title: "About", navigation: true },
      ),
    ],
    notFound: NotFoundPage,
  };
}
