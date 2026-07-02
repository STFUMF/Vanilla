import { subscribe } from "../eventBus.js";
import { getSlot } from "../layoutManager.js";
import { getPlugin, mountPlugin, unmountPlugin } from "../pluginManager.js";
import { ROUTE_CHANGED } from "./routeEvents.js";


let activePluginId = null;

function handleRouteChange({ pluginId }) {

    // Don't remound the same plugin
    if (activePluginId === pluginId) {
        return;
    }

    // Unmount current page
    if (activePluginId) {
        unmountPlugin(activePluginId)
    }

    // Mount next page
    const record = getPlugin(pluginId);

    if (!record) {
        throw new Error (`Plugin "${pluginId}" is not registered.`);
    }

    mountPlugin(
        pluginId,
        getSlot(record.plugin.slot)
    );

    activePluginId = pluginId;
}

export function startRouteController() {

    subscribe(
        ROUTE_CHANGED,
        handleRouteChange
    )
}