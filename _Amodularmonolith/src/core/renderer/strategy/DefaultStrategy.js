import { renderComponent } from "../component/renderComponent.js";
import { createRenderPipeline } from "../pipeline/createRenderPipeline.js";

export const DefaultStrategy = {
  name: "default",

  match(instance) {
    return true;
  },

  render(instance) {
    return instance.observer();
  },
};
