import { createRoute } from "../core/router";

import { HomePage } from "../features/HomePage.js";
import { AboutPage } from "../features/AboutPage.js";
import { NotFoundPage } from "../shared/pages/NotFoundPage.js"

/**
 * Regisers all application routes.
 * 
 * @returns {object}
 */
export function registerRoutes() {
    return {
        routes: [
            createRoute("/", HomePage),
            createRoute("/about", AboutPage),
        ],
        notFound: NotFoundPage,
    };
}