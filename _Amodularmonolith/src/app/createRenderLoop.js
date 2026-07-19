import { component } from "@core/components";

import { createRenderContext } from "@core/renderer";
import { Loading } from "../shared/components";
import { createRenderScheduler } from "../core/renderer/createRenderScheduler";

export function createRenderLoop({
  renderer,
  routerState,
  notFound,
  navigation,
  routes,
}) {
  return function render() {
    const Page = routerState.currentRoute?.component ?? notFound;

    const routeProps = routerState.currentRoute?.props ?? {};

    const props = { ...routeProps, navigation, routes };

    if (routerState.isRouteLoading) {
      renderer.render(createRenderContext(component(Loading)));
      return;
    }

    renderer.render(createRenderContext(component(Page, props)));

    console.count("render");
  };
}
