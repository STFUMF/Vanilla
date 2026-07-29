import { createObserver } from "../../reactivity/core/createObserver.js";
import { renderComponent } from "../component/renderComponent.js";

export const ReactiveStrategy = {
  name: "reactive",

  match(instance) {
    return instance.options.reactive === true;
  },

  render(instance) {
    if (!instance.observer) {
      instance.observer = createObserver(() => renderComponent(instance));
    }

    return instance.observer();
  },
};
