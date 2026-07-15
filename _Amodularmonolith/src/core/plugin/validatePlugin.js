export function validatePlugin(plugin) {
  if (!plugin) {
    throw new Error("Plugin is required.");
  }

  if (!plugin.name) {
    throw new Error("Plugin must have a name.");
  }

  if (typeof plugin.install !== "function") {
    throw new Error(`${plugin.name} must define install().`);
  }
}
