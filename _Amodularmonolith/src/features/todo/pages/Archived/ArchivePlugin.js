import { createRoute } from "@core/router";

import { ContributionTypes } from "../../../../core/contribution/ContributionTypes.js";
import { ArchivedPage } from "./ArchivedPage.js";
import { createPlugin } from "../../../../core/plugin/createPlugin.js";

export const ArchivePlugin = createPlugin({
  name: "archive",

  install({ contribute, resolve }) {
    const todoController = resolve("todoController");
    const toastController = resolve("toastController");
    if (!todoController) {
      throw new Error('Archive required "todoController');
    }

    contribute(
      ContributionTypes.ROUTES,
      createRoute(
        "/archive",
        ArchivedPage,
        {
          controller: todoController,
          toastController,
        },
        {
          title: "Archive",
        },
      ),
    );

    contribute(ContributionTypes.NAVIGATION, {
      label: "Archive",
      path: "/archive",
      title: "Archive",
      routePath: "/",
    });
  },
});
