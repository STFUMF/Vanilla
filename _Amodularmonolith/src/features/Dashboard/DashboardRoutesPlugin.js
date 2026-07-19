import { ContributionTypes } from "@core/contribution";
import { createPlugin } from "../../core/plugin/createPlugin.js";
import { createRoute } from "@core/router";
import { DashboardPage } from "./pages/DashboardPage.js";

export const DashboardRoutesPlugin = createPlugin({
  name: "dashboard",

  install({ contribute, resolve }) {
    const todoController = resolve("todoController");
    const toastController = resolve("toastController");
    if (!todoController) {
      throw new Error('DashboardRoutesPlugin required "todoController');
    }

    contribute(
      ContributionTypes.ROUTES,
      createRoute(
        "/",
        DashboardPage,
        {
          controller: todoController,
          toastController,
        },
        {
          title: "Dashboard",
        },
      ),
    );

    contribute(ContributionTypes.NAVIGATION, {
      label: "Dashboard",
      path: "/",
      title: "Dashboard",
      routePath: "/",
    });
  },
});
