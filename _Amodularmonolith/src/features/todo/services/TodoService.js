export class TodoService {
  /**
   * @param {TodoRepository} repository
   */
  constructor(repository) {
    this.repository = repository;
  }

  loadTodos() {
    return this.repository.getAll();
  }

  persistTodos(todos) {
    return this.repository.saveAll(todos);
  }
}
