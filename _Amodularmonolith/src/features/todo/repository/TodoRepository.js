
export class TodoRepository {
    /**
     * @param {object} storage
     */
    constructor(storage) {
        this.storage = storage;
        this.key = "todos";
    }

    getAll() {
        return this.storage.get(this.key) ?? [];
    }

    saveAll(todos) {
        this.storage.set(this.key, todos);
    }

    clear() {
        this.storage.remove(this.key);
    }
}