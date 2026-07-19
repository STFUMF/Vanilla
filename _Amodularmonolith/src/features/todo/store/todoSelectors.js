import { getDueDateStatus } from "../../../shared/utils/date/dateStatus.js";
import { createSelector } from "../../../core/store/createSelector.js";

// Selectors prevent pages and components from knowing that state's internal structure.

export const todoSelectors = {
  loading(state) {
    return state.todo.loading;
  },

  error(state) {
    return state.todo.error;
  },

  items(state) {
    return state.todo.items;
  },

  completed: createSelector(
    [(state) => state.todo.items],

    (items) => {
      console.count("Computing completed");

      return items.filter((todo) => todo.completed);
    },
  ),

  remaining: createSelector(
    [(state) => state.todo.items],

    (items) => items.filter((todo) => !todo.completed),
  ),

  total: createSelector(
    [(state) => state.todo.items],

    (items) => items.length,
  ),

  visible: createSelector(
    [
      (state) => state.todo.items,
      (_, search) => search,
      (_, __, filters) => filters,
      (_, __, ___, sort) => sort,
    ],

    (items, search, filters, sort) => {
      // let items = this.items(state);

      // search
      if (search.trim()) {
        const query = search.toLowerCase();

        items = items.filter((todo) =>
          todo.title.toLowerCase().includes(query),
        );
      }

      // Filter
      switch (filters.status) {
        case "active":
          items = items.filter((todo) => !todo.completed);
          break;

        case "completed":
          items = items.filter((todo) => todo.completed);
          break;

        default:
          break;
      }

      switch (filters.priority) {
        case "low":
        case "medium":
        case "high":
          items = items.filter((todo) => todo.priority === filters.priority);
          break;

        default:
          break;
      }

      switch (filters.dueDate) {
        case "overdue":
          items = items.filter(
            (todo) => getDueDateStatus(todo.dueDate) === "overdue",
          );
          break;

        case "today":
          items = items.filter(
            (todo) => getDueDateStatus(todo.dueDate) === "today",
          );
          break;

        case "tomorrow":
          items = items.filter(
            (todo) => getDueDateStatus(todo.dueDate) === "tomorrow",
          );
          break;

        case "week":
          items = items.filter(
            (todo) => getDueDateStatus(todo.dueDate) === "week",
          );
          break;

        case "none":
          items = items.filter((todo) => !todo.dueDate);
          break;

        default:
          break;
      }

      switch (sort) {
        case "created-asc":
          items.sort((a, b) => a.createdAt - b.createdAt);
          break;

        case "created-desc":
          items.sort((a, b) => b.createdAt - a.createdAt);
          break;

        case "title":
          items.sort((a, b) => a.title.localeCompare(b.title));
          break;

        default:
          break;
      }

      return items;
    },
  ),
};
