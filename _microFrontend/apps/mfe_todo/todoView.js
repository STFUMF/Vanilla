import { removeTodo, toggleTodo } from "./todoActions.js";
import { store } from "../shell/store.js";



export function renderTodoView(container){
    
    container.innerHTML = "";
    const todos = store.getState().todos || [];
    const editId = store.getState().editId

    if (todos.length === 0) {
        container.innerHTML = `
            <li class="empty-state">
                No Todos yet.<br>
                <small>Add one above to get started!</small>
            </li>
        `
        return;
    }

    todos.forEach(todo => {
        const li  = document.createElement('li');
        li.dataset.id = todo.id;
        li.className = 'todo'

        if (editId.editingId === todo.id) {

            li.innerHTML = `
                <input type="text" value="${todo.title}" class='editInput'/>
                <button class="saveBtn">Save</button>
                <button class="cancelBtn">Cancel</button>
            `
            container.appendChild(li);

            const editInput = document.querySelector('.editInput');
            editInput.focus();
            editInput.setSelectionRange(editInput.value.length, editInput.value.length);

            
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