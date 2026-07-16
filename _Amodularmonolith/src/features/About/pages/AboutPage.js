/*  Static page

    Renderer

    Store

    Router

    Middleware

    Persistence
*/
import { component } from "@core/components/";
import { element } from "@core/renderer";
import { AppLayout } from "../../../app/layout/AppLayout.js";

import { Header, Navigation, Footer } from "../../../shared/components";

export function AboutPage({ navigation, routes }) {
  return component(AppLayout, {
    header: component(Header),
    navigation,
    routes,
    footer: component(Footer),

    children: [
      element("h2", {}, "About"),
      element(
        "p",
        {},
        "This project is a frontend framework built from scratch.",
      ),
    ],
  });
}
