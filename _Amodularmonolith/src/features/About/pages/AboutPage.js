/*  Static page

    Renderer

    Store

    Router

    Middleware

    Persistence
*/
import { element } from "@core/renderer";

export function AboutPage() {
  return element(
    "main",
    {},

    element("h1", {}, "About"),
  );
}
