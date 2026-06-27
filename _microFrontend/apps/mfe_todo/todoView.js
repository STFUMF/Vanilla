import { removeTodo, toggleTodo } from "./todoActions.js";
import { store } from "../shell/store.js";

export function renderTodoView(container){
    container.innerHTML = "";
    const todos = store.getState().todos;
    
    console.log(todos);
    todos.forEach(todo => {
        const li  = document.createElement('li');
        li.dataset.id = todo.id;
        li.className = 'todo'
        li.innerHTML = `
            ${todo.title}
            <button class="deleteBtn">Delete</button>
        `

        if (todo.completed){
            li.style.textDecoration = "line-through";
        }

        container.appendChild(li);
    })

}