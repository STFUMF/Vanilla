import { component } from "@core/components";

import { createRenderContext } from "@core/renderer";
import { Loading } from "../shared/components";
import { PerformanceProfiler } from "../core/performance/PerformanceProfiler.js";

export function createRenderLoop({
  renderer,
  routerState,
  notFound,
  navigation,
  routes,
}) {
  return function render() {
    const start = performance.now();

    try {
      const Page = routerState.currentRoute?.component ?? notFound;

      const routeProps = routerState.currentRoute?.props ?? {};

      const props = { ...routeProps, navigation, routes };

      if (routerState.isRouteLoading) {
        renderer.render(createRenderContext(component(Loading)));
        return;
      }

      renderer.render(createRenderContext(component(Page, props)));
    } finally {
      const elapsed = performance.now() - start;
      PerformanceProfiler.increment("renders");
      console.log("Render took:", elapsed);
      PerformanceProfiler.add("renderTime", elapsed);
      console.table(PerformanceProfiler.getMetrics());
    }
  };
}
