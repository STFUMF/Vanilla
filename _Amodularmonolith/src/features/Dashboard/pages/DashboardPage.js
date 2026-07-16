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

export function DashboardPage({ controller }) {
  console.log("page controller:", controller);
  return component(AppLayout, {
    header: component(Header),

    footer: component(Footer),

    children: [component(DashboardContent, { controller })],
  });
}
