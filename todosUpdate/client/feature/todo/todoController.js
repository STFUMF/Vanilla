import { todoActions } from "./todo.actions.js";
import { todoService } from "./todo.service.js";

export function initTodoModule(store, view, eventBus) {

    // Load initial data
    const savedTodos = todoService.getAll();
    store.dispatch(todoActions.set(savedTodos));

    // Render on state change
    store.subscribe(() => {
        const state = store.getState();
        const todos = state.todo.items;

        view.render(todos);
        todoService.save(todos);
    });

    // Add todo
    view.addBtn.addEventListener("click", () => {
        const title = view.getInput().trim();

        if (!title) return;

        const todo = {
            id: Date.now(),
            title,
            completed: false
        };

        store.dispatch(todoActions.add(todo));

        // eventBus usage example
        eventBus.emit("TODO_CREATED", todo);

        view.clearInput();
    });

    // Handle list actions
    view.list.addEventListener("click", (e) => {
        const id = Number(e.target.dataset.id);

        if (e.target.classList.contains("toggle")) {
            store.dispatch(todoActions.toggle(id));
            eventBus.emit("TODO_TOGGLED", id);
        }

        if (e.target.classList.contains("delete")) {
            store.dispatch(todoActions.delete(id));
            eventBus.emit("TODO_DELETED", id);
        }
    });
}