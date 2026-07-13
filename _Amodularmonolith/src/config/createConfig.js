export function createConfig(options = {}) {
  return Object.freeze({
    dev: true,

    debug: false,

    version: "1.0.0",

    ...options,
  });
}
