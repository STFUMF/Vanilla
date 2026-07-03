import manifest from "../plugins/manifest.js";

const registry = new Map();

for (const entry of manifest) {
    registry.set(entry.id, entry);
}

export function getPluginEntry(id) {
    return registry.get(id);
}

export function getPluginEntries() {
    return [...registry.values()];
}

