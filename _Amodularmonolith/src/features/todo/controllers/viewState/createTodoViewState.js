export function createTodoViewState(controller) {
  return {
    setTitle(title) {
      controller.title = title;
      controller.notifyViewChanged();
    },

    setCategory(category) {
      controller.category = category;
      controller.notifyViewChanged();
    },

    setSearch(search) {
      controller.search = search;
      controller.notifyViewChanged();
    },

    setPriority(priority) {
      controller.priority = priority;
      controller.notifyViewChanged();
    },

    setDueDate(date) {
      controller.dueDate = date;
      controller.notifyViewChanged();
    },

    setStatusFilter(status) {
      controller.filters = {
        ...controller.filters,
        status,
      };

      controller.notifyViewChanged();
    },

    setPriorityFilter(priority) {
      controller.filters = {
        ...controller.filters,
        priority,
      };

      controller.notifyViewChanged();
    },

    setDueDateFilter(dueDate) {
      controller.filters = {
        ...controller.filters,
        dueDate,
      };

      controller.notifyViewChanged();
    },

    setCategoryFilter(category) {
      controller.filters = {
        ...controller.filters,
        category,
      };

      controller.notifyViewChanged();
    },

    setSort(sort) {
      controller.sort = sort;
      controller.notifyViewChanged();
    },

    setViewChangedListener(listener) {
      controller.onViewChanged = listener;
    },

    notifyViewChanged() {
      controller.onViewChanged();
    },
  };
}
