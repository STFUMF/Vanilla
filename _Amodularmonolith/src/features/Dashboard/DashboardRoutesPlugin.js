import { ContributionTypes } from "@core/contribution";
import { createPlugin } from "../../core/plugin/createPlugin.js";
import { createRoute } from "@core/router";
import { DashboardPage } from "./pages/DashboardPage.js";

export const DashboardRoutesPlugin = createPlugin({
  name: "dashboard",

  install({ contribute, resolve }) {
    const controller = resolve("todoController");

    if (!controller) {
      throw new Error('DashboardRoutesPlugin required "todoController');
    }

    contribute(
      ContributionTypes.ROUTES,
      createRoute(
        "/",
        DashboardPage,
        {
          controller,
        },
        {
          title: "Dashboard",
        },
      ),
    );

    contribute(ContributionTypes.NAVIGATION, {
      label: "Dashboard",
      path: "/",
    });
  },
});
