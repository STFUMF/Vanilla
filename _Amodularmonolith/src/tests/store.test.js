import { describe, test, expect } from "@core/testing";

import { createStore } from "@core/store";

describe("Store", () => {
  test("returns initial state", () => {
    const reducer = (state = { count: 0 }, action) => state;

    const store = createStore(reducer);

    expect(store.getState()).toEqual({ count: 0 });
  });

  test("dispatch updates state", () => {
    const reducer = (state = { count: 0 }, action) => {
      switch (action.type) {
        case "INC":
          return {
            count: state.count + 1,
          };

        default:
          return state;
      }
    };

    const store = createStore(reducer);

    store.dispatch({
      type: "INC",
    });

    expect(store.getState().count).toBe(1);
  });

  test("subscribe receives updates", () => {
    let called = false;

    const reducer = (state = 0, action) => state + 1;

    const store = createStore(reducer);

    store.subscribe(() => {
      called = true;
    });

    store.dispatch({});

    expect(called).toBeTruthy();
  });

  test("unsubscribe removes listener", () => {
    let calls = 0;

    const reducer = (state = 0, action) => state;

    const store = createStore(reducer);

    const unsubscribe = store.subscribe(() => {
      calls++;
    });

    unsubscribe();

    store.dispatch({});

    expect(calls).toBe(0);
  });

  test("supports multiple subscribers", () => {
    let count = 0;

    const reducer = (state = 0, action) => state;

    const store = createStore(reducer);

    store.subscribe(() => count++);
    store.subscribe(() => count++);

    store.dispatch({});

    expect(count).toBe(2);
  });

  test("dispatch notifies subscribers after state update", () => {
    const reducer = (state = 0) => state + 1;

    const store = createStore(reducer);

    const before = store.getState();

    let value;

    store.subscribe(() => {
      value = store.getState();
    });

    store.dispatch({});

    expect(value).toBe(before + 1);
  });

  test("unknown action leaves state unchanged", () => {
    const reducer = (
      state = {
        count: 5,
      },
      action,
    ) => {
      switch (action.type) {
        default:
          return state;
      }
    };

    const store = createStore(reducer);

    const previous = store.getState();

    store.dispatch({
      type: "UNKNOWN",
    });

    expect(store.getState()).toBe(previous);
  });

  test("dispatch inside subscriber", () => {
    const reducer = (state = 0) => state + 1;

    const store = createStore(reducer);

    const before = store.getState();

    let calls = 0;

    store.subscribe(() => {
      calls++;

      if (calls === 1) {
        store.dispatch({});
      }
    });

    store.dispatch({});

    expect(store.getState()).toBe(before + 2);
  });
});
