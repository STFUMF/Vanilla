import { describe, test, expect } from "@core/testing";

import { createSelector } from "../core/store/createSelector.js";

describe("createSelector", () => {
  test("supports multiple selectors", () => {
    const selector = createSelector(
      [(state) => state.a, (state) => state.b],

      (a, b) => a + b,
    );

    expect(
      selector({
        a: 2,
        b: 3,
      }),
    ).toBe(5);
  });
  test("returns computed result", () => {
    const selector = createSelector(
      [(state) => state.count],

      (count) => count * 2,
    );

    expect(selector({ count: 5 })).toBe(10);
  });
  test("memoizes selector result", () => {
    const selector = createSelector(
      [(state) => state.count],

      (count) => count * 2,
    );

    const state = {
      count: 5,
    };

    expect(selector(state)).toBe(10);

    // Should use cached result
    expect(selector(state)).toBe(10);
  });

  test("computes only once for identical input", () => {
    let calls = 0;

    const selector = createSelector(
      [(state) => state.count],

      (count) => {
        calls++;
        return count * 2;
      },
    );

    const state = {
      count: 10,
    };

    selector(state);
    selector(state);
    selector(state);

    expect(calls).toBe(1);
  });

  test("recomputes when input changes ", () => {
    let calls = 0;

    const selector = createSelector(
      [(state) => state.count],

      (count) => {
        calls++;
        return count * 2;
      },
    );

    selector({
      count: 1,
    });

    selector({
      count: 2,
    });

    expect(calls).toBe(2);
  });
});
