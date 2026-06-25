import { store } from "../shell/store.js";
import { addTodo } from "./todoActions.js";
import { renderTodoView } from "./todoView.js";


export function renderTodo(root){

    root.innerHTML = `
        <h1>Todo App</h1>

        <input type="text" id="todoInput" />
        <button id="addBtn">Add</button>

        <ul id="todoList"><ul>
    `;
    console.log(store.getState());
    const input = root.querySelector("#todoInput");

    const button = root.querySelector("#addBtn");

    const list = root.querySelector("#todoList");

    function update(){
        renderTodoView(list);
    }

    button.addEventListener('click', () => {
        store.dispatch(addTodo({
            title: input.value.trim(),
        }))

        input.value = "";
        console.log(store.getState());
    })

    store.subscribe(update);

    update();
}