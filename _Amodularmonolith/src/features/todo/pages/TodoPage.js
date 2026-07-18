import { component } from "@core/components";

import { AppLayout } from "../../../app/layout/AppLayout.js";
import { Header, Navigation, Footer } from "../../../shared/components";
import { TodoContent } from "./components/TodoContent.js";
import { Logger } from "@core/logger";

export function TodoPage({ controller, navigation, routes, toastController }) {
  return component(AppLayout, {
    header: component(Header),
    navigation,
    routes,
    toastController,
    footer: component(Footer),
    children: [
      component(TodoContent, {
        controller,
      }),
    ],
  });
}
