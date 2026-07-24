export function createTodoSelection(controller) {
  return {
    toggleSelection(id) {
      if (controller.selectedTodoIds.has(id)) {
        controller.selectedTodoIds.delete(id);
      } else {
        controller.selectedTodoIds.add(id);
      }

      controller.notifyViewChanged();
    },

    clearSelection() {
      controller.selectedTodoIds.clear();

      controller.notifyViewChanged();
    },

    isSelected(id) {
      return controller.selectedTodoIds.has(id);
    },

    hasSelection() {
      return controller.selectedTodoIds.size > 0;
    },

    selectAll() {
      controller.selectedTodoIds = new Set(
        controller.getTodos().map((todo) => todo.id),
      );

      controller.notifyViewChanged();
    },

    areAllSelected() {
      return (
        controller.getTodos().length > 0 &&
        controller.selectedTodoIds.size === controller.getTodos().length
      );
    },

    async deleteSelected() {
      return this.forEachSelected((todo) => controller.deleteTodo(todo));
    },

    async completeSelected() {
      return this.forEachSelected((todo) =>
        controller.updateTodo({
          ...todo,
          completed: true,
          updatedAt: Date.now(),
        }),
      );
    },

    async archiveSelected() {
      return this.forEachSelected((todo) => controller.archiveTodo(todo));
    },

    async restoreSelected() {
      return this.forEachSelected((todo) => controller.restoreTodo(todo));
    },

    async forEachSelected(callback) {
      const todos = controller.getSelectedTodos();

      await controller.store.transaction(async () => {
        for (const todo of todos) {
          await callback(todo);
        }
      });

      controller.clearSelection();
    },
  };
}
