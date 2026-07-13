import "./Navigation.css";
import { component } from "@core/components";

import { Row } from "../../LayoutComponent/Row/Row.js";

import { NavLink } from "./NavLink.js";
import { getCurrentPath, RouterService } from "@core/router";
import { prefetchRoute } from "../../../../core/router/prefetchRoute.js";

export function Navigation() {
  const currentPath = getCurrentPath();
  const routes = RouterService.getRoutes();
  return component(Row, {
    gap: "sm",

    children: routes
      .filter((route) => route.meta.navigation)
      .map((route) =>
        component(NavLink, {
          to: route.path,
          onRoutes: { allRoute: routes, routePath: route.path },

          active: currentPath === route.path,

          children: [route.meta.title],
        }),
      ),
  });
}
