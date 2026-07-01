import { publish } from "./eventBus.js";
import {
    PLUGIN_REGISTERED,
    PLUGIN_INITIALIZED,
    PLUGIN_MOUNTED,
    PLUGIN_UNMOUNTED,
    PLUGIN_DESTROYED
} from "./pluginEvents.js"

const plugins = new Map();

export function registerPlugin(plugin) {

    if (!plugin.id) {
        throw new Error("Plugin must have an id.");
    }

    if (plugins.has(plugin.id)) {
        throw new Error(`Plugin "${plugin.id}" is already registered.`);
    }

    plugins.set(plugin.id, {
        plugin,
        initialized: false,
        mounted: false,
        root: null,
    });
    
    publish(PLUGIN_REGISTERED, {
        id: plugin.id,
    })
}


export function initializePlugin(id) {
    const record = plugins.get(id);

    if (!record) {
        throw new Error(`Unknown plugin "${id}".`);
    }

    if (!record.initialized) {
        record.plugin.initialize?.();
        record.initialized = true;

        publish(PLUGIN_INITIALIZED, {
            id: id,
        });
    }
    
}

export function mountPlugin(id, root) {
    const record = plugins.get(id);

    if (!record) {
        throw new Error(`Unknown plugin "${id}".`);
    }

    if (!record.mounted) {
        record.plugin.mount(root);

        record.root = root;
        record.mounted = true;

        publish(PLUGIN_MOUNTED, {
            id: id,
        });
    }
}

export function unmountPlugin(id) {
    const record = plugins.get(id);

    if (!record || !record.mounted) {
        return;
    }

    record.plugin.unmount?.();

    record.root = null;
    record.mounted = false;

    publish(PLUGIN_UNMOUNTED, {
        id: id,
    })
}

export function destroyPlugin(id) {

    const record = plugins.get(id);

    if (!record) {
        return;
    }

    if (record.mounted) {
        record.plugin.unmount?.();
    }

    record.plugin.destroy?.();

    plugins.delete(id);

    publish(PLUGIN_DESTROYED, {
        id: id,
    })
}

export function getPlugins() {
    return [...plugins.values()];
}


export function getPlugin(id) {
    return plugins.get(id);
}

export function getPluginStates() {

    return getPlugins().map(record => ({

        id: record.plugin.id,

        version: record.plugin.version,

        slot: record.plugin.slot,

        initialized: record.initialized,

        mounted: record.mounted
    }));
}

export function isPluginMounted(id) {
    const record = plugins.get(id);

    if (!record) {
        return false;
    }

    return record.mounted;
}