import { ContributionTypes } from "../../core/contribution/ContributionTypes.js";
import { createPlugin } from "../../core/plugin/createPlugin.js";
import { createRoute } from "@core/router";
import { AboutPage } from "./pages/AboutPage.js";

export const AboutRoutesPlugin = createPlugin({
  name: "about",

  install({ contribute }) {
    contribute(
      ContributionTypes.ROUTES,
      createRoute(
        "/about",
        AboutPage,
        {},
        {
          title: "About",
        },
      ),
    );

    contribute(ContributionTypes.NAVIGATION, {
      label: "About",
      path: "/about",
      title: "About",
      routePath: "/about",
    });
  },
});
