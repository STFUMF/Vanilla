import { component } from "@core/components";

import { Container, Navigation, Stack } from "../../shared/components";
import { ToastHost } from "../../shared/components/Toast/ToastHost.js";

export function AppLayout({
  header,
  footer,
  navigation,
  routes,
  toastController,
  children,
}) {
  console.log("layout toast controller:", toastController);
  return component(Container, {
    children: [
      header,
      component(Navigation, { navigation, routes }),
      ...children,
      component(ToastHost, {
        controller: toastController,
      }),

      footer,
    ],
  });
}
