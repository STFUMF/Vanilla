import { publish } from "../eventBus.js";
import { ROUTE_CHANGED, ROUTE_NOT_FOUND } from "./routeEvents.js";


const routes = new Map();

let currentRoute = null;

export function registerRoute(route, pluginId) {

    if (routes.has(route.path)) {
        throw new Error(`Route "${route.path}" already exists.`);
    }

    routes.set(route.path, {
        ...routes, pluginId,
    });
}

export function getCurrentRoute() {
    return currentRoute;
}

export function getRoutes() {
    return [...routes.entries()];
}

export function navigate(path) {

    if (!routes.has(path)) {

        publish(ROUTE_NOT_FOUND, {
            path
        });
        return;
    }

    currentRoute = path;

   history.pushState({}, "", path);

   const route = routes.get(path);
    publish(ROUTE_CHANGED, {
        path,
        pluginId: route.pluginId,
        route
    });
}

export function startRouter(){

    window.addEventListener("popstate", () => {

        const path = window.location.pathname;

        currentRoute = path;

        if (!routes.has(path)) {

            publish(ROUTE_NOT_FOUND, {
                path,
            });

            return;
        }

        publish(ROUTE_CHANGED, {
            path, pluginId: routes.get(path),
        });
    });
}


setTimeout(() => {

    navigate("/stats");

}, 3000);

setTimeout(() => {

    navigate("/todos");

}, 6000);