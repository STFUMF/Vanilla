import { describe, test, expect } from "@core/testing";

import { shallowEqual } from "@core/components/shallowEqual";

describe("shallowEqual", () => {
  test("returns true for same object", () => {
    const obj = { value: 1 };

    expect(shallowEqual(obj, obj)).toBe(true);
  });

  test("returns true for equal primitive props", () => {
    expect(shallowEqual({ a: 1 }, { a: 1 })).toBe(true);
  });

  test("compares children by contents", () => {
    expect(shallowEqual({ children: [] }, { children: [] })).toBeTruthy();
  });
});
