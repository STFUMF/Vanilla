export const ReactiveStrategy = {
  name: "reactive",

  match(instance) {
    return instance.options.reactive;
  },

  render(instance) {
    throw new Error("Not implemented");
  },
};
