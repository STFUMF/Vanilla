import { getSlot, initializedLayout } from "./layoutManager.js";

import manifest from "../plugins/manifest.js";
import { loadPlugin } from "./pluginLoader.js";
import { getPlugin, initializePlugin, mountPlugin, registerPlugin, unmountPlugin } from "./pluginManager.js";

export async function bootstrap(){

    initializedLayout({
        todo: "#todo-root",
        filter: "#filter-root",
        search: "#search-root",
        notifications: "#notification-root",
        stats: "#stats-root",
        theme: "#theme-root",
        dashboard: "#pluginDashboard"
    });

    for (const entry of manifest) {

        const plugin = await loadPlugin(entry);

        registerPlugin(plugin);

        initializePlugin(plugin.id);

        const root = getSlot(plugin.slot);

        mountPlugin(plugin.id, root);
    }
}

setTimeout(() => {
    console.log('unmount stats')
    unmountPlugin("stats");

}, 3000);

setTimeout(() => {

    mountPlugin(
        "stats",
        getSlot("stats")
    );
    console.log('mounted again')
}, 6000);