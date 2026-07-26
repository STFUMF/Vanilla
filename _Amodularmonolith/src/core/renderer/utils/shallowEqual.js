/**
 * Performs a shallow equality check.
 *
 * Returns true if both objects have the same
 * keys
 * and identical values
 *
 */
export function shallowEqual(a, b) {
  // Same reference
  if (Object.is(a, b)) {
    return true;
  }

  // Must both be objects
  if (
    typeof a !== "object" ||
    a === null ||
    typeof b !== "object" ||
    b === null
  ) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    if (!Object.hasOwn(b, key)) {
      return false;
    }

    if (!Object.is(a[key], b[key])) {
      return false;
    }
  }

  return true;
}
const obj = {};
console.log(shallowEqual({ x: {} }, { x: {} }));
