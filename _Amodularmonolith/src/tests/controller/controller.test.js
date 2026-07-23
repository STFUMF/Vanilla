import { describe, test, expect } from "@core/testing";

import { createTodoTestContext } from "../../app/createTodoTestContext.js";

describe("selection", () => {
  test("selects todo", () => {
    const { controller } = createTodoTestContext();

    controller.toggleSelection(1);

    expect(controller.isSelected(1)).toBeTruthy();
  });

  test("unselects todo", () => {
    const { controller } = createTodoTestContext();

    controller.toggleSelection(1);
    controller.toggleSelection(1);

    expect(controller.isSelected(1)).toBeFalsy();
  });

  test("clears selection", () => {
    const { controller } = createTodoTestContext();

    controller.toggleSelection(1);
    controller.toggleSelection(2);

    controller.clearSelection();

    expect(controller.getSelectedCount()).toBe(0);
  });
  test("select all", async () => {
    const { controller } = createTodoTestContext([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]);

    await controller.loadTodos();

    controller.selectAll();

    expect(controller.getSelectedCount()).toBe(3);
  });
});
