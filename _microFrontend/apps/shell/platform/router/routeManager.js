
const routes = new Map();

export function registerRoute(route) {

    if (routes.has(route.path)) {
        throw new Error(`Route "${route.path}" already registered`);
    }
    
    routes.set(route.path, route);
}

export function getRoute(Path) {
    return routes.get(path);
}

export function getRoutes() {
    return [...routes.values()];
}

export function hasRoute(path) {
    return routes.has(path);
}