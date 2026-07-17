/* 
    Today's Tasks

    Completed

    Remaining

    Quick Actions

    [Open Todos]
*/

import { component } from "@core/components/";
import { AppLayout } from "../../../app/layout/AppLayout.js";

import { Header, Navigation, Footer } from "../../../shared/components";
import { DashboardContent } from "../components/DashboardContent.js";

export function DashboardPage({
  controller,
  navigation,
  routes,
  toastController,
}) {
  console.log("page toast controller:", toastController);
  return component(AppLayout, {
    header: component(Header),
    navigation,
    routes,
    toastController,
    footer: component(Footer),

    children: [component(DashboardContent, { controller })],
  });
}
