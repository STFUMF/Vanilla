import { subscribe } from "../eventBus.js";
import { getSlot } from "../layoutManager.js";
import { ensurePluginLoaded, getPlugin, mountPlugin, unmountPlugin } from "../pluginManager.js";
import { ROUTE_CHANGED, ROUTE_NOT_FOUND } from "./routeEvents.js";


let activePluginId = null;

async function handleRouteChange({ pluginId }) {

    // Don't remound the same plugin
    if (activePluginId === pluginId) {
        return;
    }

    // Unmount current page
    if (activePluginId) {
        unmountPlugin(activePluginId)
    }

    await ensurePluginLoaded(pluginId);

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

async function handleRouteNotFound() {

    if (activePluginId) {
        unmountPlugin(activePluginId);
    }

    await ensurePluginLoaded("not-found")
    const record = getPlugin("not-found");

    mountPlugin(
        "not-found",
        getSlot(record.plugin.slot)
    );

    activePluginId = "not-found";
}

export function startRouteController() {

    subscribe(
        ROUTE_CHANGED,
        handleRouteChange,
    )

    subscribe(
        ROUTE_NOT_FOUND,
        handleRouteNotFound
    )
}