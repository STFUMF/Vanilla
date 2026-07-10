import { component } from "@core/components/";

import { Button } from "../../Button/Button.js";

import { navigate, getCurrentPath } from "@core/router";

export function NavLink({ to, active, children }) {
  return component(Button, {
    variant: active ? "primary" : "ghost",

    size: "md",

    children,

    onClick() {
      navigate(to);
    },
  });
}
