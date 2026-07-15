export function createPlugin(options) {
  return Object.freeze({
    name: options.name,
    version: options.version ?? "1.0.0",
    dependencies: options.dependencies ?? [],
    install: options.install,
  });
}
