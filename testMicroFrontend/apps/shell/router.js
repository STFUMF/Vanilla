
const routes = new Map();

export function registerRoute(path, loader){
    routes.set(path, loader);
}

export function navigate(path){
    window.location.hash = path;
}

export function getCurrentRoutes(){ 
    return window.location.hash.slice(1) || "/";
}

export async function renderRoute(container){
    const path = getCurrentRoute();

    const loader = routes.get(path);

    if (!loader){
        container.innerHTML = `
            <h1>404</h1>
            <p>Route "${path}" not found </p>
        `;
        return;
    }

    const module = await loader();

    if (typeof module.render === "function") {
        module.render(container);
    }
}

export function startRouter(container){
    const handleRoute = () => renderRoute(container);

    window.addEventListener('hashchange', handleRoute);

    handleRoute();
}