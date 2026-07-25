import { ContributionTypes } from "../../core/contribution/ContributionTypes.js";
import { NotFoundPage } from "../../shared/pages/NotFoundPage";

import { createUI } from "../app.js";

export function createInterface(app) {
  console.log("Root:", app.getRoot());
  const ui = createUI({
    root: app.getRoot(),

    store: app.resolve("store"),

    routes: app.getContributions(ContributionTypes.ROUTES),

    navigation: app.getContributions(ContributionTypes.NAVIGATION),

    notFound: NotFoundPage,

    toastController: app.resolve("toastController"),

    todoController: app.resolve("todoController"),
  });

  app
    .attachRenderer(ui.renderer)
    .attachRouter(ui.router)
    .register("renderer", ui.renderer)
    .register("router", ui.router);

  return ui;
}
