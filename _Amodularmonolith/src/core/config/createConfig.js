export function createConfig(options = {}) {
  return Object.freeze({
    name: "Frontend",

    version: "1.0.0",

    dev: true,

    debug: false,

    strict: true,

    ...options,
  });
}
