import { createRoute } from "../core/router";

import { HomePage } from "../features/HomePage.js";
import { AboutPage } from "../features/AboutPage.js";
import { NotFoundPage } from "../shared/pages/NotFoundPage.js"
import { TodoPage } from "../features/todo/pages/TodoPage.js";

/**
 * Regisers all application routes.
 * 
 * @returns {object}
 */
export function registerRoutes() {
    return {
        routes: [
            createRoute("/", TodoPage),
            createRoute("/about", AboutPage),
            createRoute("/home", TodoPage)
        ],
        notFound: NotFoundPage,
    };
}