import { component } from "@core/components";

import { createRenderContext } from "@core/renderer";
import { Loading } from "../shared/components";

export function createRenderLoop({ renderer, routerState, notFound }) {
  return function render() {
    const Page = routerState.currentRoute?.component ?? notFound;

    const props = routerState.currentRoute?.props ?? {};

    if (routerState.isRouteLoading) {
      renderer.render(createRenderContext(component(Loading)));
      return;
    }

    renderer.render(createRenderContext(component(Page, props)));
  };
}
