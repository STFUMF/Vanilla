import { getSlot, initializedLayout } from "./layoutManager.js";

import manifest from "../plugins/manifest.js";
import { loadPlugin } from "./pluginLoader.js";
import { getPlugin, getPlugins, initializePlugin, mountPlugin, registerPlugin, unmountPlugin } from "./pluginManager.js";
import { getRoutes, navigate, registerRoute, startRouter } from "./router/router.js";
import { startRouteController } from "./router/routeController.js";
import { getPluginEntries } from "./pluginRegistery.js";

export async function bootstrap(){

    initializedLayout({
         header: "#header-root",

    sidebar: "#sidebar-root",

    main: "#main-root",

    inspector: "#inspector-root",

    notifications: "#notification-root",

    footer: "#footer-root"
    });

    for (const entry of getPluginEntries()) {

        for (const route of entry.routes ?? []) {
            registerRoute(route, entry.id);
        }
        if (!entry.eager) {
            continue;
        }

        const plugin = await loadPlugin(entry);

        registerPlugin(plugin);

        initializePlugin(plugin.id);

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

console.log("Current URL:", window.location.pathname);
console.log("Registered routes:", getRoutes());
navigate(window.location.pathname);

}

