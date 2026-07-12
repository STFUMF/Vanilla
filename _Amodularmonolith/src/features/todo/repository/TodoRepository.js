export class TodoRepository {
  /**
   * @param {object} storage
   */
  constructor(api) {
    this.api = api;
  }

  async getAll() {
    return this.api.loadTodos();
  }

  async add(todo) {
    console.log("add from repository");
    return this.api.addTodo(todo);
  }

  async update(todo) {
    console.log("updated");
    return this.api.updateTodo(todo);
  }

  async remove(id) {
    return this.api.deleteTodo(id);
  }

  async toggle(id) {
    return this.api.toggle(id);
  }

  async clear() {
    return this.api.remove(this.key);
  }
}
