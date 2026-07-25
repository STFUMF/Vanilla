import { component } from "@core/components";

import { AppLayout } from "../../../app/layout/AppLayout";
import { Header } from "../../../shared/components";
import { Footer } from "../../../shared/components";

import { NotesContent } from "../views/NotesContent.js";

export function NotesPage({ controller, navigation, routes, toastController }) {
  return component(AppLayout, {
    header: component(Header),

    navigation,

    routes,
    toastController,
    footer: component(Footer),

    children: [
      component(NotesContent, {
        controller,
      }),
    ],
  });
}
