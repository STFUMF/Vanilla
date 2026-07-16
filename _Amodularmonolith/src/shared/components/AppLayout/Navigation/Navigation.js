import "./Navigation.css";
import { component } from "@core/components";

import { Row } from "../../LayoutComponent/Row/Row.js";

import { NavLink } from "./NavLink.js";
import { getCurrentPath, RouterService } from "@core/router";
import { prefetchRoute } from "../../../../core/router/prefetchRoute.js";

export function Navigation({ navigation, routes }) {
  const currentPath = getCurrentPath();

  return component(Row, {
    gap: "sm",

    children: navigation.map((item) =>
      component(NavLink, {
        to: item.path,
        onRoutes: { allRoute: routes, routePath: item.path },

        active: currentPath === item.path,

        children: [item.label],
      }),
    ),
  });
}
