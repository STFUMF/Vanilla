/**
 * Creates a memoized selector.
 *
 * @param {Function} inputSelector
 * @param {Function} resultSelector
 */

import { PerformanceProfiler } from "../performance/PerformanceProfiler.js";

export function createSelector(inputSelectors, resultSelector) {
  if (!Array.isArray(inputSelectors)) {
    throw new TypeError("createSelctor expects an array of input selectors.");
  }

  if (typeof resultSelector !== "function") {
    throw new TypeError("Result selector must be a function.");
  }
  let previousInputs = null;
  let previousResults = null;

  return function selector(state, ...args) {
    const inputs = inputSelectors.map((selector) => selector(state, ...args));

    const isSame =
      previousInputs &&
      inputs.every((input, index) => input === previousInputs[index]);

    if (isSame) {
      PerformanceProfiler.increment("selectorHits");
      return previousResults;
    }

    PerformanceProfiler.increment("selectorMisses");
    previousInputs = inputs;
    previousResults = resultSelector(...inputs);

    return previousResults;
  };
}
