export class TodoService {
  /**
   * @param {TodoRepository} repository
   */
  constructor(repository) {
    this.repository = repository;
  }

  async loadTodos(options = {}) {
    return this.repository.getAll(options);
  }

  async addTodo(todo) {
    console.log("add from todoservice");
    return this.repository.add(todo);
  }

  async updateTodo(todo) {
    console.log("update service");
    return this.repository.update(todo);
  }

  async deleteTodo(id) {
    return this.repository.remove(id);
  }
}
