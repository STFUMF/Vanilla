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

        segments: route.path
            .split("/")
            .filter(Boolean)
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

   const result = matchRoute(path);

   if (!result) {

        publish(ROUTE_NOT_FOUND, {path});

        return;
   }

   currentRoute = path;

   history.pushState({}, "", path);

   publish(ROUTE_CHANGED, {
        
        path,

        pluginId: result.route.pluginId,

        route: result.route,

        params: result.params
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

function matchRoute(path) {
    const pathSegments = path
                            .split("/")
                            .filter(Boolean);

    for (const route of routes.values()) {

        if (route.segments.length !== pathSegments.length) {
            continue;
        }

        const params = {};

        let matched = true;

        for (let i = 0; i < route.segments.length; i++) {

            const expected = route.segments[i];
            const actual = pathSegments[i];

            if (expected.startsWith(":")) {

                params[expected.substring(i)] = actual;
                continue;
            }

            if (expected !== actual) {

                matched = false;

                break;
            }
        }

        if (matched) {
            return { route, params };
        }
    }

    return null;
}

setTimeout(() => {

    navigate("/stats");

}, 3000);

setTimeout(() => {

    navigate("/todos");

}, 6000);