import { createRoute } from "../core/router";

import { AboutPage } from "../features/About/pages/AboutPage.js";
import { NotFoundPage } from "../shared/pages/NotFoundPage.js";
import { TodoPage } from "../features/todo/pages/TodoPage.js";
import { DashboardPage } from "../features/Dashboard/pages/DashboardPage.js";
import { createLazyRoute } from "../core/router/createLazyRoute.js";

/**
 * Regisers all application routes.
 *
 * @returns {object}
 */
export function registerRoutes({ todoController }) {
  return {
    routes: [
      createLazyRoute(
        "/",

        async () => {
          console.log("called hover");
          await new Promise((resolve) => setTimeout(resolve, 2000));
          const module =
            await import("../features/Dashboard/pages/DashboardPage.js");

          console.log(module);
          return module.DashboardPage;
        },
        { controller: todoController },
        { title: "Dashboard", navigation: true },
      ),
      /* createRoute(
        "/",
        DashboardPage,
        { controller: todoController },
        { title: "Dashboard", navigation: true },
      ), */
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
