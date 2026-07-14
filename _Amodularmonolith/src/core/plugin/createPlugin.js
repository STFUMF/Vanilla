export function createPlugin(name, install) {
  return Object.freeze({
    name,
    install,
  });
}
