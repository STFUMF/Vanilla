export function createTodoInteractions(controller) {
  return {
    async addTodoc() {
      const title = controller.title.trim();

      if (!title) {
        return;
      }

      const todo = {
        id: crypto.randomUUID(),
        title,
        completed: false,
        dueDate: controller.dueDate || null,
        priority: controller.priority,
        category: controller.category,
        tags: [],
        archived: false,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      const result = await controller.addTodo(todo);

      controller.title = "";
      controller.priority = "medium";
      controller.dueDate = "";

      controller.notifyViewChanged();

      return result;
    },

    startEditing(todo) {
      controller.editingTodoId = todo.id;
      controller.editTitle = todo.title;

      controller.notifyViewChanged();
    },

    setEditTitle(title) {
      controller.editTitle = title;

      controller.notifyViewChanged();
    },

    cancelEditing() {
      controller.editingTodoId = null;
      controller.editTitle = "";

      controller.notifyViewChanged();
    },

    isEditing(id) {
      return controller.editingTodoId === id;
    },

    async saveEdit(todo) {
      const updatedTodo = {
        ...todo,
        title: controller.editTitle.trim(),
        updatedAt: Date.now(),
      };

      const result = await controller.updateTodo(updatedTodo);

      controller.cancelEditing();

      return result;
    },

    async deleteTodoc(todo) {
      return controller.deleteTodo(todo);
    },

    async toggleTodoc(todo) {
      return controller.toggleTodo({
        ...todo,
        completed: !todo.completed,
        updatedAt: Date.now(),
      });
    },
  };
}
