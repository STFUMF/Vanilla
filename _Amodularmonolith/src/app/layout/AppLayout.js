import { component } from "@core/components";

import { Container, Stack } from "../../shared/components";

export function AppLayout({ header, navigation, children, footer }) {
  return component(Container, {
    size: "lg",

    children: [
      component(Stack, {
        gap: "lg",

        children: [header, navigation, ...children, footer],
      }),
    ],
  });
}
