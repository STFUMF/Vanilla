import { ContributionTypes } from "@core/contribution";
import { createPlugin } from "../../core/plugin/createPlugin.js";
import { createRoute } from "@core/router";
import { TodoPage } from "./pages/TodoPage.js";

export const TodoRoutesPlugin = createPlugin({
  name: "todo-routes",

  install({ contribute, resolve }) {
    const controller = resolve("todoController");
    console.log("todo");
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
      title: "Todos",
      routePath: "/todos",
    });
  },
});
