import { component } from "@core/components";

import { AppLayout } from "../../../app/layout/AppLayout.js";
import { Header, Navigation, Footer } from "../../../shared/components";
import { TodoContent } from "./components/TodoContent.js";

export function TodoPage({ controller }) {
  return component(AppLayout, {
    header: component(Header),
    footer: component(Footer),
    children: [
      component(TodoContent, {
        controller,
      }),
    ],
  });
}
