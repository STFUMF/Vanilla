/**
 * Creates a memoized selector.
 *
 * @param {Function} inputSelector
 * @param {Function} resultSelector
 */

export function createSelector(inputSelector, resultSelector) {
  let previousInput;
  let previousResult;

  return function selector(state) {
    const input = inputSelector(state);

    if (input === previousInput) {
      return previousResult;
    }

    previousInput = input;
    previousResult = resultSelector(input);

    return previousResult;
  };
}
