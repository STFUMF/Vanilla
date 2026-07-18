import { component } from "@core/components/";

import { Button } from "../../Button/Button.js";

import { navigate, getCurrentPath } from "@core/router";
import { prefetchRoute } from "../../../../core/router/prefetchRoute.js";

export function NavLink({ to, routes, active, children }) {
  return component(Button, {
    variant: active ? "primary" : "ghost",

    size: "md",

    children,

    onClick() {
      navigate(to);
    },
    onMouseEnter() {
      prefetchRoute(routes, to);
    },
  });
}
