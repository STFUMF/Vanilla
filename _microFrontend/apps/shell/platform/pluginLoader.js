
export async function loadPlugin(manifest) {

    console.log("Loading plugin:", manifest.id)
    if (!manifest.loader) {
        throw new Error(`Plugin "${manifest.id}" does not define a loader`)
    }

    const module = await manifest.loader();

    if (!module.default) {
        throw new Error(`Plugin "${manifest.id}" must export a default plugin object.`)
    }

    return module.default;
}