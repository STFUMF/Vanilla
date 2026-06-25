import { toggleTodo } from "./todoActions.js";
import { store } from "../shell/store.js";

export function renderTodoView(container){

    const state = store.getState();

    container.innerHTML = "";

    
    state.todos.items.forEach(todo => {
        const li  = document.createElement('li');

        li.textContent = todo.title;

        if (todo.completed){
            li.style.textDecoration = "line-through";
        }

        li.addEventListener('click', () => {
            store.dispatch(toggleTodo(todo.id)
            )
        })

        container.appendChild(li);
    })

}