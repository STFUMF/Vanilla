import { describe, test, expect } from "@core/testing";

import { memo } from "@core/components/memo";

describe("memo", () => {
  test("calls component on first render", () => {
    let calls = 0;

    const Component = memo(() => {
      calls++;
      return "Hello";
    });

    expect(Component({})).toBe("Hello");
    expect(calls).toBe(1);
  });

  test("returns cached result for identical props", () => {
    let calls = 0;

    const Component = memo((props) => {
      calls++;
      return props.value;
    });

    Component({ value: 10 });
    Component({ value: 10 });
    Component({ value: 10 });

    expect(calls).toBe(1);
  });

  test("re-renders when props change", () => {
    let calls = 0;

    const Component = memo((props) => {
      calls++;
      return props.value;
    });

    Component({ value: 1 });
    Component({ value: 2 });

    expect(calls).toBe(2);
  });

  test("treats identical children arrays as equal", () => {
    let calls = 0;

    const Component = memo(() => {
      calls++;
      return null;
    });

    Component({
      children: [],
    });

    Component({
      children: [],
    });

    expect(calls).toBe(1);
  });

  test("re-renders when object prop reference changes", () => {
    let calls = 0;

    const Component = memo((props) => {
      calls++;
      return props.todo;
    });

    Component({
      todo: {
        id: 1,
      },
    });

    Component({
      todo: {
        id: 1,
      },
    });

    expect(calls).toBe(2);
  });
});
