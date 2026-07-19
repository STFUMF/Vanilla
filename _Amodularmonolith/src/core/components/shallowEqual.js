export function shallowEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (!a || !b) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    if (key === "children") {
      const childrenA = a.children ?? [];
      const childrenB = b.children ?? [];

      if (childrenA.length !== childrenB.length) {
        return false;
      }

      for (let i = 0; i < childrenA.length; i++) {
        if (childrenA[i] !== childrenB[i]) {
          return false;
        }
        // If you later support nested arrays or VNodes with custom equality,
        // this is the place to extend the comparison.
      }

      continue;
    }

    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}
