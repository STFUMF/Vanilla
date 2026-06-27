import { removeTodo, toggleTodo } from "./todoActions.js";
import { store } from "../shell/store.js";
import { editingId } from "./todoPage.js";



export function renderTodoView(container){
    
    container.innerHTML = "";
    const todos = store.getState().todos;
    
    console.log(todos);
    todos.forEach(todo => {
        const li  = document.createElement('li');
        li.dataset.id = todo.id;
        li.className = 'todo'

        if (editingId === todo.id) {

            li.innerHTML = `
                <input type="text" value="${todo.title}"/>
                <button class="saveBtn">Save</button>
                <button class="cancelBtn>Cancel</button>
            `

            container.appendChild(li);
            return;
        }
        li.innerHTML = `
            ${todo.title}
            <button class="updateBtn">Update</button>
            <button class="deleteBtn">Delete</button>
        `

        if (todo.completed){
            li.style.textDecoration = "line-through";
        }

        container.appendChild(li);
    })

}