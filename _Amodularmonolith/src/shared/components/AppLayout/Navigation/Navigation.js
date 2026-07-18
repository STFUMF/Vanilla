import "./Navigation.css";
import { component } from "@core/components";

import { Row } from "../../LayoutComponent/Row/Row.js";

import { NavLink } from "./NavLink.js";
import { getCurrentPath } from "@core/router";

export function Navigation({ navigation, routes }) {
  console.log("Navigation routes:", routes);
  const currentPath = getCurrentPath();

  return component(Row, {
    gap: "sm",

    children: navigation.map((item) =>
      component(NavLink, {
        to: item.path,
        routes,

        active: currentPath === item.path,

        children: [item.label],
      }),
    ),
  });
}
