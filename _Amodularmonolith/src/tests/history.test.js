import { describe, test, expect } from "@core/testing";
import { createStore } from "@core/store";
import { countReducer } from "../core/store/countReducer.js";
import { historyActions } from "../core/store/history/historyActions.js";
describe("history", () => {
  test("hisstoryys", () => {
    const store = createStore(countReducer);
    console.log(store);
    store.dispatch({ type: "increment" });
    store.dispatch({ type: "increment" });

    expect(store.getState()).toBe(2);

    store.dispatch(historyActions.undo());

    expect(store.getState()).toBe(1);
  });
});
