import { ContributionTypes } from "@core/contribution";
import { createPlugin } from "../../core/plugin/createPlugin.js";
import { createRoute } from "@core/router";
import { TodoPage } from "./pages/TodoPage.js";

export const TodoRoutesPlugin = createPlugin({
  name: "todo-routes",

  install({ contribute, resolve }) {
    const controller = resolve("todoController");

    console.log(controller === resolve("todoController"));

    if (!controller) {
      throw new Error('TodoRoutesPlugin requires "todoController".');
    }

    contribute(
      ContributionTypes.ROUTES,
      createRoute(
        "/todos",
        TodoPage,
        { controller },
        {
          title: "Todos",
        },
      ),
    );

    contribute(ContributionTypes.NAVIGATION, {
      label: "Todos",
      path: "/todos",
    });
  },
});
