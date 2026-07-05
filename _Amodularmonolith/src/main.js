// Entry point
import "./shared/styles/reset.css";
import "./shared/styles/variables.css";
import "./shared/styles/global.css";

import { bootstrap } from "./app/bootstrap.js";
import { createRouter } from "./core/router/createRouter.js";
import { createRoute } from  "./core/router/createRoute.js"

bootstrap();

console.log("Application start...")
const routes = [
    createRoute("/", "HomePage"),
    createRoute("/about", "AboutPage")
]
const router = createRouter(
    routes,
    (route, path) => {
        console.log(path)
        console.log(route);
    }
)


router.start();