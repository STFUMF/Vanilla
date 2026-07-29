import { renderComponent } from "../component/renderComponent.js";
import { createRenderPipeline } from "../pipeline/createRenderPipeline.js";

export const DefaultStrategy = {
  name: "default",

  match() {
    return true;
  },

  render(instance) {
    return renderComponent(instance);
  },
};
