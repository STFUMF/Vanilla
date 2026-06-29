import { publish } from "../shell/platform/eventBus.js";
import { EVENTS } from "../shell/platform/events.js";
import { store } from "../shell/store.js";
import { addTodo, removeTodo, toggleTodo, updateTodo } from "./todoActions.js";
import { renderTodoView } from "./todoView.js";


export function renderTodo(root) {

    root.innerHTML = `
        <h1>Todo App</h1>

        <input type="text" id="todoInput" />
        <button id="addBtn">Add</button>

        <p id="todoError" class="error"></p>

        <ul id="todoList"></ul>
    `;


    const input = root.querySelector("#todoInput");
    const button = root.querySelector("#addBtn");
    const error = root.querySelector("#todoError");
    const list = root.querySelector("#todoList");


    function validateTodo(title) {
        const todos = store.getState().todos;

        if (!title) {
            return "Todo title cannot be empty";
        }

        const exists = todos.some(todo =>
            todo.title.toLowerCase() === title.toLowerCase()
        );

        if (exists) {
            return "That todo already exists.";
        }

        return null;
    }


    function handleAddTodo() {

        const title = input.value.trim();

        const validationError = validateTodo(title);


        if (validationError) {
            error.textContent = validationError;
            return;
        }


        store.dispatch(
            addTodo({
                id: crypto.randomUUID(),
                title,
                completed: false
            })
        );

        publish(EVENTS.TODO_ADDED, {title});

        input.value = "";
        input.focus();
    }



    button.addEventListener("click", handleAddTodo);


    input.addEventListener("keydown", e => {

        if (e.key === "Enter") {
            handleAddTodo();
        }

    });


    input.addEventListener("input", () => {
        error.textContent = "";
    });



    list.addEventListener("click", e => {

        const item = e.target.closest("[data-id]");

        if (!item) return;


        const id = item.dataset.id;



        if (e.target.closest(".todo")) {

            store.dispatch(
                toggleTodo(id)
            );

        }


        if (e.target.closest(".deleteBtn")) {

            store.dispatch(
                removeTodo(id)
            );
            publish(EVENTS.TODO_REMOVED, id);
        }



        if (e.target.closest(".saveBtn")) {

            const editInput = item.querySelector(".editInput");

            const title = editInput.value;
            store.dispatch(
                updateTodo(id, title)
            );


            store.dispatch({
                type: "EDITID",
                payload: null
            });

            publish(EVENTS.TODO_UPDATED, { title })
        }



        if (e.target.closest(".cancelBtn")) {

            store.dispatch({
                type: "EDITID",
                payload: null
            });

        }

    });



    store.subscribe(() => {
        renderTodoView(list);
    });



    renderTodoView(list);

}