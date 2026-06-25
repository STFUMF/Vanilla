const routes = new Map();

//helper
const wait = (ms) => new Promise(r => setTimeout(r, ms));
const getDuration = (el) => {
    const style = getComputedStyle(el);
    return parseFloat(style.transitionDuration) * 1000;
}

export function registerRoute(path, loader, options = {}){
    routes.set(path, {
        loader,
        skeleton: options.skeleton || null
    });
}

export function navigate(path){
    window.location.hash = path;
}

export function getCurrentRoute(){
    return window.location.hash.slice(1) || "/";
}

export async function renderRoute(container){
    const path = getCurrentRoute();
    const route = routes.get(path);

    if (!route) {
        container.innerHTML = `
            <h1>404</h1>
            <p>Route "${path}" not found </p>
        `;
        return;
    }

    const MIN_SKELETON_TIME = 2000;
    const startTime = Date.now();

    // 1. exit old view
    const oldView = container.querySelector(".route-view");

    if (oldView) {
        oldView.classList.add("exit");
        await wait(getDuration(oldView));
        oldView.remove();
    }

    // 2. create new view
    const view = document.createElement("div");
    view.className = 'route-view enter';
    container.appendChild(view);

    // 3. show skeleton immediately
    if (route.skeleton) {
        route.skeleton(view);
    } else {
        view.innerHTML = `<p>Loading...</p>`;
    }

    // force reflow so enter animation works
    view.offsetHeight;
    view.classList.add("enter-active");

    try {
        // 4. load module
        const module = await route.loader();
        const renderFn = module.render || module.default?.render;

        // 5. enforce MIN skeleton time
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, MIN_SKELETON_TIME - elapsed);

        await wait(remaining);

        // 6. render real page
        if (typeof renderFn === "function") {
            view.innerHTML = "";
            renderFn(view);
        }

    } catch (err) {
        view.innerHTML = `
            <h1>Error</h1>
            <pre>${err.message}</pre>
        `;
    }
}

export function startRouter(container) {

    // create layout once
    container.innerHTML = `
        <nav>
            <a href="#/">Home</a>
            <a href="#/todos">Todos</a>
            <a href="#/user">User</a>
        </nav>

        <div id="outlet"></div>
    `;
    
    const outlet = container.querySelector("#outlet")

    const handleRoute = () => renderRoute(outlet);

    window.addEventListener('hashchange', handleRoute);

    handleRoute();
}