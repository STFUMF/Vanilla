
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
}


export function initializePlugin(id) {
    const record = plugins.get(id);

    if (!record) {
        throw new Error(`Unknown plugin "${id}".`);
    }

    if (!record.initialized) {
        record.plugin.initialize?.();
        record.initialized = true;
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
}

export function getPlugins() {
    return [...plugins.values()];
}


export function getPlugin(id) {
    return plugins.get(id);
}