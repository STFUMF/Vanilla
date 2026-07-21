import { describe, test, expect } from "@core/testing";
import { createApplication } from "../core/application/createApplication";
import { StorePlugin } from "@core/store";
import { ContributionTypes } from "../core/contribution/ContributionTypes.js";
import { LoggerPlugin } from "../core/plugin/LoggerPlugin.js";
import { TodoRoutesPlugin } from "../features/todo/TodoRoutesPlugin.js";
import { TodoController } from "../features/todo/controllers/TodoController.js";
import { createStore } from "../core/store/createStore.js";
import { rootReducer } from "../app/registerStore.js";
import { createEventBus } from "@core/events";
import { AboutRoutesPlugin } from "../features/About/AboutRoutesPlugin.js";
import { createPlugin } from "../core/plugin/createPlugin.js";

describe("Plugin Installation", () => {
  test("test 1 installs a plugin", () => {
    const app = createApplication();
    app.use(StorePlugin);
    expect(app.getPlugins().length).toBe(1);
  });

  test("Test 2 install multiple plugins", () => {
    const app = createApplication();

    app.use(StorePlugin);
    app.use(LoggerPlugin);

    expect(app.getPlugins().length).toBe(2);
  });

  test("Test 3: ignores duplicate plugins", () => {
    const app = createApplication();

    app.use(StorePlugin);
    app.use(StorePlugin);

    expect(app.getPlugins().length).toBe(1);
  });

  test("Suite 2: StorePlugin contributes thunk middleware", () => {
    const app = createApplication();

    app.use(StorePlugin);

    const middleware = app.getContributions(ContributionTypes.MIDDLEWARE);

    expect(middleware.length).toBe(1);
    expect(typeof middleware[0]).toBe("function");
  });

  test("Suite 3: TodoRoutesPlugin registers route", () => {
    const app = createApplication();

    app.register("todoController", {});
    app.use(TodoRoutesPlugin);

    const routes = app.getContributions(ContributionTypes.ROUTES);

    expect(routes.length).toBe(1);
  });

  test("Suite 4: TodoRoutesPlugin contributes navigation", () => {
    const app = createApplication();
    /*  const store = createStore(rootReducer);
    const controller = new TodoController(store, {}, createEventBus()); */

    app.register("todoController", {});
    app.use(TodoRoutesPlugin);

    const navigation = app.getContributions(ContributionTypes.NAVIGATION);

    expect(navigation.length).toBe(1);
  });

  test("Suite 5: collects contributions from multiple plugins", () => {
    const app = createApplication();

    app.register("todoController", {});
    app.use(StorePlugin);
    app.use(TodoRoutesPlugin);
    app.use(AboutRoutesPlugin);
    console.log(app.getContributions(ContributionTypes.NAVIGATION));
    expect(app.getContributions(ContributionTypes.MIDDLEWARE).length).toBe(1);
    expect(app.getContributions(ContributionTypes.ROUTES).length).toBe(2);

    expect(app.getContributions(ContributionTypes.NAVIGATION).length).toBe(2);
  });

  test("Suite 6: plugin install executes once", () => {
    let called = 0;

    const TestPlugin = createPlugin({
      name: "tset",
      install() {
        called++;
      },
    });

    const app = createApplication();

    app.use(TestPlugin);
    expect(called).toBe(1);
  });

  test("Suite 7: plugin registers custom contribution", () => {
    const app = createApplication();

    const TestPlugin = createPlugin({
      name: "test",

      install({ contribute }) {
        contribute("TEST", "hello");
      },
    });

    app.use(TestPlugin);

    const values = app.getContributions("TEST");
    expect(values[0]).toBe("hello");
  });

  test("Suit 8: returns empty contribution list", () => {
    const app = createApplication();

    const values = app.getContributions("UNKNOWN");

    expect(values.length).toBe(0);
  });
});
