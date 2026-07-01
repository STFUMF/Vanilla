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
        theme: "#theme-root"
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
    
    console.log("Unmounting Stats...")

    unmountPlugin("stats");
}, 3000)

setTimeout(() => {
    console.log("Mounting Stats...")

    const stats = getPlugin("stats");

    mountPlugin("stats", getSlot(stats.plugin.slot))
}, 6000)