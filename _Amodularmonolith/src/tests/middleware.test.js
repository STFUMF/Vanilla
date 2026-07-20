import { describe, test, expect } from "@core/testing";

import { createStore } from "@core/store";

describe("Middleware", () => {
  test("middleware is executed during dispatch", () => {
    let executed = false;

    const middleware = () => (next) => (action) => {
      executed = true;
      next(action);
    };

    const reducer = (state = 0, action) => state + 1;

    const store = createStore(reducer, [middleware]);

    store.dispatch({});

    expect(executed).toBeTruthy();
  });

  test("next forwards action", () => {
    const middleware = () => (next) => (action) => {
      next(action);
    };

    const reducer = (state = 0, action) => state + 1;

    const store = createStore(reducer, [middleware]);

    const before = store.getState();

    store.dispatch({});

    expect(store.getState()).toBe(before + 1);
  });

  test("middleware executes in order", () => {
    const calls = [];

    const first = () => (next) => (action) => {
      calls.push("first");

      next(action);
    };

    const second = () => (next) => (action) => {
      calls.push("second");
      next(action);
    };

    const reducer = (state = 0, action) => state;

    const store = createStore(reducer, [first, second]);

    store.dispatch({});

    expect(calls).toEqual(["first", "second"]);
  });

  test("middleware can modify action", () => {
    const middleware = () => (next) => (action) => {
      next({ ...action, value: 5 });
    };

    const reducer = (state = 0, action) => action.value ?? state;

    const store = createStore(reducer, [middleware]);

    store.dispatch({});

    expect(store.getState()).toBe(5);
  });

  test("dispatch accepts thunk", () => {
    const reducer = (state = 0, action) => {
      switch (action.type) {
        case "INC":
          return state + 1;
        default:
          return state;
      }
    };

    const thunk =
      ({ dispatch }) =>
      (next) =>
      (action) => {
        if (typeof action === "function") {
          return action(dispatch);
        }

        return next(action);
      };

    const store = createStore(reducer, [thunk]);

    const before = store.getState();

    store.dispatch((dispatch) => {
      dispatch({ type: "INC" });
    });

    expect(store.getState()).toBe(before + 1);
  });

  test("dispatch supports async thunk", async () => {
    const reducer = (state = 0, action) => {
      switch (action.type) {
        case "INC":
          return state + 1;

        default:
          return state;
      }
    };

    const thunk =
      ({ dispatch }) =>
      (next) =>
      async (action) => {
        if (typeof action === "function") {
          return action(dispatch);
        }

        return next(action);
      };

    const store = createStore(reducer, [thunk]);

    const before = store.getState();

    await store.dispatch(async (dispatch) => {
      await Promise.resolve();

      dispatch({
        type: "INC",
      });
    });

    expect(store.getState()).toBe(before + 1);
  });
});
