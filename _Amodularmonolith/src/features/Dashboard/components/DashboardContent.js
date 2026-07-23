import { component } from "@core/components";
import { element } from "@core/renderer";

import { Stack, Row, Card, Button } from "../../../shared/components";
import { navigate } from "@core/router";

export function DashboardContent({ controller }) {
  //console.log("content controller:", controller);
  const stats = controller.getStatsWithoutArchive();
  //const totals = controller.getStatsWithoutArchive();
  return component(Stack, {
    gap: "lg",

    children: [
      element("h1", {}, "Dashboard"),

      component(Row, {
        columns: 3,
        gap: "md",

        children: [
          component(Row, {
            children: [
              component(Card, {
                children: [
                  element("h3", {}, "Total"),

                  element("strong", {}, String(stats.total)),
                ],
              }),
            ],
          }),
        ],
      }),

      component(Row, {
        children: [
          component(Card, {
            children: [
              element("h3", {}, "Completed"),

              element("strong", {}, String(stats.completed)),
            ],
          }),
        ],
      }),

      component(Row, {
        children: [
          component(Card, {
            children: [
              element("h3", {}, "Remaining"),

              element("strong", {}, String(stats.remaining)),
            ],
          }),
        ],
      }),

      component(Button, {
        children: ["Open Todo List"],

        onClick: () => navigate("/todos"),
      }),
    ],
  });
}
