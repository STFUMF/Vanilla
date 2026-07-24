import { todoSelectors } from "../../store/todoSelectors.js";

export function createTodoQueries(controller) {
  return {
    getTodos() {
      return todoSelectors.items(controller.store.getState());
    },

    getVisibleTodos() {
      return todoSelectors.visible(
        controller.store.getState(),
        controller.search,
        controller.filters,
        controller.sort,
      );
    },

    getStatsWithoutArchive() {
      const state = controller.store.getState();

      return {
        total: todoSelectors.active(state).length,
        completed: todoSelectors.completed(state).length,
        remaining: todoSelectors.remaining(state).length,
      };
    },

    getStats() {
      const state = controller.store.getState();

      return {
        total: todoSelectors.total(state),
        completed: todoSelectors.completed(state).length,
        remaining: todoSelectors.remaining(state).length,
      };
    },

    isLoading() {
      return todoSelectors.loading(controller.store.getState());
    },

    getError() {
      return todoSelectors.error(controller.store.getState());
    },

    getFilters() {
      return controller.filters;
    },

    getSort() {
      return controller.sort;
    },

    getPriority() {
      return controller.priority;
    },

    getDueDate() {
      return controller.dueDate;
    },

    getCategory() {
      return controller.category;
    },

    getSelectedCount() {
      return controller.selectedTodoIds.size;
    },

    getSelectedTodos() {
      return this.getTodos().filter((todo) =>
        controller.selectedTodoIds.has(todo.id),
      );
    },

    getArchivedTodos() {
      return todoSelectors.archived(controller.store.getState());
    },
  };
}
