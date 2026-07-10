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

  async saveAll(todos) {
    return this.api.saveTodos(todos);
  }

  async clear() {
    return this.api.remove(this.key);
  }
}
