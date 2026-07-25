import { ContributionTypes } from "../../../core/contribution/ContributionTypes";
import { createPlugin } from "../../../core/plugin/createPlugin";
import { NotesPage } from "../pages/NotesPage";

export const NotesRoutesPlugin = createPlugin({
  name: "notes-routes",

  install({ contribute, resolve }) {
    const controller = resolve("noteController");
    const toastController = resolve("toastController");

    if (!controller) {
      throw new Error('NotesRoutesPlugin required "noteController"');
    }

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
