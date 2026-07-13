// Given any route, return a route that is ready to render.

import { assertRoute } from "@core/assert";

export async function loadRoute(route) {
  assertRoute(route);
  try {
    if (!route) {
      return null;
    }

    if (route.type !== "lazy") {
      return route;
    }

    const component = await route.loader();

    console.log(component);
    console.log(typeof component);
    return {
      ...route,
      component,
    };
  } catch (error) {
    console.error(error);

    return null;
  }
}
