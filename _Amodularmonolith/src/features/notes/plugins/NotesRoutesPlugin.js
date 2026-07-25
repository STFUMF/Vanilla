import { ContributionTypes } from "../../../core/contribution/ContributionTypes";
import { createPlugin } from "../../../core/plugin/createPlugin";
import { createRoute } from "../../../core/router";
import { NotesPage } from "../pages/NotesPage";

export const NotesRoutesPlugin = createPlugin({
  name: "notes-routes",

  install({ contribute, resolve }) {
    const controller = resolve("noteController");
    const toastController = resolve("toastController");

    contribute(
      ContributionTypes.ROUTES,
      createRoute(
        "/notes",
        NotesPage,
        {
          controller,
          toastController,
        },
        {
          title: "Notes",
        },
      ),
    );

    contribute(ContributionTypes.NAVIGATION, {
      label: "Notes",
      path: "/notes",
      title: "Notes",
      routePath: "/notes",
    });
  },
});
