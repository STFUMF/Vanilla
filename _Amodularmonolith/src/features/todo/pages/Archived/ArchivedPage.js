import { component } from "@core/components/";
import { AppLayout } from "../../../../app/layout/AppLayout.js";

import { Header, Navigation, Footer } from "../../../../shared/components";
import { ArchiveContent } from "./ArchivedContent.js";

export function ArchivedPage({
  controller,
  navigation,
  routes,
  toastController,
}) {
  //console.log("page toast controller:", toastController);
  return component(AppLayout, {
    header: component(Header),
    navigation,
    routes,
    toastController,
    footer: component(Footer),

    children: [component(ArchiveContent, { controller })],
  });
}
