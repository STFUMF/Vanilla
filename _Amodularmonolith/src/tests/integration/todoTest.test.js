import { describe, test, expect } from "@core/testing";
import { createStoreService, LocalStorageAdapter } from "../../core/storage";
import { FakeApi } from "../../core/api";
import { TodoRepository } from "../../features/todo/repository/TodoRepository.js";
import { TodoService } from "../../features/todo/services/TodoService.js";
import { rootReducer } from "../../app/registerStore.js";
import { TodoController } from "../../features/todo/controllers/TodoController.js";
import { createAddTodoThunk } from "../../features/todo/store/thunks/addTodoThunk.js";
import { todoSelectors } from "../../features/todo/store/todoSelectors.js";
import { createStore } from "@core/store";
import { createDeleteTodo } from "../../features/todo/store/thunks/deleteTodoThunk.js";
import { createLoadTodos } from "../../features/todo/store/thunks/loadTodos.js";
import { createUpdateTodo } from "../../features/todo/store/thunks/updateTodoThunk.js";
import { createToggleTodoThunk } from "../../features/todo/store/thunks/toggleTodoThunk.js";
import { createEventBus } from "@core/events";
import { thunk } from "../../core/store/middleware/thunk.js";

import { createTodoTestContext } from "./createTodoHelper.js";

describe("Todo Integration", () => {
  test("loads todos", async () => {
    const { controller, store } = createTodoTestContext([
      { id: 1, title: "A", completed: false },
      { id: 2, title: "B", completed: false },
      { id: 3, title: "C", completed: true },
    ]);

    await controller.loadTodos();

    expect(todoSelectors.loading(store.getState())).toBeFalsy();
    expect(todoSelectors.total(store.getState())).toBe(3);
  });

  test("adds a todo", async () => {
    const { controller, store } = createTodoTestContext();

    const todo = {
      id: 1,
      title: "Learn Testing",
      completed: false,
      priority: "medium",
      dueDate: null,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    await controller.addTodo(todo);

    const todos = todoSelectors.items(store.getState());

    expect(todos.length).toBe(1);
    expect(todos[0].title).toBe("Learn Testing");
  });

  test("updates a todo", async () => {
    const { controller, store } = createTodoTestContext([
      {
        id: 1,
        title: "Old Title",
        completed: false,
      },
    ]);

    await controller.loadTodos();

    await controller.updateTodo({
      id: 1,
      title: "New Title",
      completed: false,
    });

    const todo = todoSelectors.items(store.getState())[0];

    expect(todo.title).toBe("New Title");
  });

  test("toggles a todo", async () => {
    const { controller, store } = createTodoTestContext([
      {
        id: 1,
        title: "Todo",
        completed: false,
      },
    ]);

    await controller.loadTodos();

    const todo = todoSelectors.items(store.getState())[0];

    await controller.toggleTodo(todo);

    expect(todoSelectors.items(store.getState())[0].completed).toBeTruthy();
  });

  test("deletes a todo", async () => {
    const { controller, store } = createTodoTestContext([
      {
        id: 1,
        title: "Delete Me",
        completed: false,
      },
    ]);

    await controller.loadTodos();

    const todo = todoSelectors.items(store.getState())[0];

    await controller.deleteTodo(todo);

    expect(todoSelectors.total(store.getState())).toBe(0);
  });
});
