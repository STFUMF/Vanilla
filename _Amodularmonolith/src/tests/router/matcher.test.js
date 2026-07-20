import { describe, test, expect } from "@core/testing";

import { matchRoute, createRouter, navigate } from "@core/router";

describe("matchRoute", () => {
  test("matches existing route", () => {
    const routes = [{ path: "/" }, { path: "/about" }];

    const result = matchRoute(routes, "/about");

    expect(result.path).toBe("/about");
  });

  test("returns null when route does not exist", () => {
    const routes = [{ path: "/" }];

    expect(matchRoute(routes, "/missing")).toBeNull();
  });

  test("updates hash", () => {
    navigate("/about");

    expect(window.location.hash).toBe("#/about");
  });

  test("creates router", () => {
    const router = createRouter([], {
      onLoading() {},
      onChange() {},
      onError() {},
    });

    expect(router).toBeTruthy();
  });

  test("updates hash repeatedly", () => {
    navigate("/");

    expect(window.location.hash).toBe("#/");

    navigate("/about");

    expect(window.location.hash).toBe("#/about");
  });

  test("exposes start and stop", () => {
    const router = createRouter([], {
      onLoading() {},
      onChange() {},
      onError() {},
    });

    expect(typeof router.start).toBe("function");

    expect(typeof router.stop).toBe("function");
  });

  test("stop removes router listener", () => {
    let calls = 0;

    const router = createRouter(
      [
        {
          path: "/",
        },
      ],
      {
        onLoading() {},
        onError() {},

        onChange() {
          calls++;
        },
      },
    );

    router.start();

    router.stop();

    window.location.hash = "/";

    window.dispatchEvent(new HashChangeEvent("hashchange"));

    expect(calls).toBe(0);
  });

  test("start resolves initial route", async () => {
    let changed = false;

    window.location.hash = "#/";

    const router = createRouter([{ path: "/" }], {
      onLoading() {},
      onError() {},
      onChange() {
        changed = true;
      },
    });

    router.start();

    await Promise.resolve();

    expect(changed).toBeTruthy();
  });

  /*  test("matches root route", () => {
    const routes = [{ path: "/" }];

    const result = matchRoute(routes, "/");

    expect(result.path).toBe("/");
  });

  test("returns undefined for unknown route", () => {
    const routes = [
      {
        path: "/",
      },
    ];

    const result = matchRoute(routes, "/about");

    expect(result).toBeUndefined();
  });

  test("matches route parameters", () => {
    const routes = [
      {
        path: "/todos/:id",
      },
    ];

    const result = matchRoute(routes, "/todos/42");

    expect(result.params.id).toBe("42");
  });

  test("parses query parameters", () => {
    const routes = [
      {
        path: "/todos",
      },
    ];

    const result = matchRoute(routes, "/todos?completed=true");

    expect(result.query.completed).toBe("true");
  });

  test("navigate changes current route", () => {
    let changed = false;
    const routes = [
      {
        path: "/todos",
      },
    ];

    const router = createRouter(routes, {
      onChange() {
        changed = true;
      },
    });

    router.navigate("/");

    expect(changed).toBeTruthy();
  });

  test("loads lazy route", async () => {
    const router = createRouter([
      {
        path: "/about",

        onLoading: async () => ({
          component: "About",
        }),
      },
    ]);

    await router.navigate("/about");

    expect(router.getCurrentRoute().component).toBe("About");
  });

  test("calls onLoading before lazy load", async () => {
    let loading = false;

    const router = createRouter(routes, {
      onLoading() {
        loading = true;
      },
    });

    await router.navigate("/about");

    expect(loading).toBeTruthy();
  });

  test("prefetch caches lazy module", async () => {
    let loads = 0;

    const routes = [
      {
        path: "/about",

        load: async () => {
          loads++;

          return {
            component: "About",
          };
        },
      },
    ];

    await prefetchRoute(routes, "/about");

    await navigate("/about");

    expect(loads).toBe(1);
  }); */
});
