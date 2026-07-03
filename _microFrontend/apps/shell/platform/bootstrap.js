import { getSlot, initializedLayout } from "./layoutManager.js";

import manifest from "../plugins/manifest.js";
import { loadPlugin } from "./pluginLoader.js";
import { getPlugin, getPlugins, initializePlugin, mountPlugin, registerPlugin, unmountPlugin } from "./pluginManager.js";
import { getRoutes, navigate, registerRoute, startRouter } from "./router/router.js";
import { startRouteController } from "./router/routeController.js";

export async function bootstrap(){

    initializedLayout({
         header: "#header-root",

    sidebar: "#sidebar-root",

    main: "#main-root",

    inspector: "#inspector-root",

    notifications: "#notification-root",

    footer: "#footer-root"
    });

    for (const entry of manifest) {

        const plugin = await loadPlugin(entry);

        registerPlugin(plugin);

        initializePlugin(plugin.id);

        for (const route of plugin.routes ?? []) {

            registerRoute(route, plugin.id);

        }

    }

    for (const record of getPlugins()) {

        const plugin = record.plugin;

        if (plugin.type !== "global") {
            continue;
        }

        mountPlugin(
            plugin.id,
            getSlot(plugin.slot)
        );

    }


startRouter();
startRouteController();
navigate(window.location.pathname);
console.log(getRoutes())
}

