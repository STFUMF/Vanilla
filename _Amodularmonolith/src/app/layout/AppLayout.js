import { component } from "@core/components";

import { Container, Navigation, Stack } from "../../shared/components";

export function AppLayout({ header, footer, navigation, routes, children }) {
  return component(Container, {
    children: [
      header,
      component(Navigation, { navigation, routes }),
      ...children,
      footer,
    ],
  });
}
