import { createRoute } from "../core/router";

import { AboutPage } from "../features/AboutPage.js";
import { NotFoundPage } from "../shared/pages/NotFoundPage.js"
import { TodoPage } from "../features/todo/pages/TodoPage.js";

/**
 * Regisers all application routes.
 * 
 * @returns {object}
 */
export function registerRoutes({ todoController }) {
    return {
        routes: [
            createRoute("/", () => TodoPage({ controller: todoController})),
            createRoute("/about", AboutPage),
            createRoute("/home", TodoPage)
        ],
        notFound: NotFoundPage,
    };
}