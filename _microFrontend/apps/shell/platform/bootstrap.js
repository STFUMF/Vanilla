import { getSlot, initializedLayout } from "./layoutManager.js";

import manifest from "../plugins/manifest.js";
import { loadPlugin } from "./pluginLoader.js";
import { getPlugin, getPlugins, initializePlugin, mountPlugin, registerPlugin, unmountPlugin } from "./pluginManager.js";
import { getRoutes, navigate, registerRoute, startRouter } from "./router/router.js";
import { startRouteController } from "./router/routeController.js";

export async function bootstrap(){

    initializedLayout({
        todo: "#todo-root",
        filter: "#filter-root",
        search: "#search-root",
        notifications: "#notification-root",
        stats: "#stats-root",
        theme: "#theme-root",
        dashboard: "#pluginDashboard",
        navigation: "#navigation"
    });

    for (const entry of manifest) {

        const plugin = await loadPlugin(entry);

        registerPlugin(plugin);

        initializePlugin(plugin.id);

        const root = getSlot(plugin.slot);

        if(plugin.type === "global"){
            mountPlugin(plugin.id, root);
        }

        mountPlugin(plugin.id, root);

        for (const route of plugin.routes ?? []) {

            registerRoute(route, plugin.id)
            console.log(route.path)
        }
        console.log(plugin)
    }


startRouter();
startRouteController();
console.log(getRoutes())
}

