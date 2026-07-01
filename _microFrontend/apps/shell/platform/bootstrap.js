import { getSlot, initializedLayout } from "./layoutManager.js";
import { getPlugins } from "./pluginResgistery.js";

import manifest from "../plugins/manifest.js";
import { loadPlugin } from "./pluginLoader.js";
import { initializePlugin, mountPlugin, registerPlugin } from "./pluginManager.js";

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