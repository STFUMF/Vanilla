
export async function loadPlugin(manifest) {

    console.log("Loading plugin:", manifest.id)

    const module = await manifest.loader();

    const plugin = module.default;

    if (!plugin.id) {
        throw new Error("Plugin is missing an id.");
    }

    if (typeof plugin.mount !== "function") {
        throw new Error(`${plugin.id}: mount() is required`);
    }
    
    if (typeof plugin.unmount !== "function") {
        throw new Error(`${plugin.id}: unmount() is required.`)
    }

    return plugin;
}