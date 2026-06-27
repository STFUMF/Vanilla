import { store } from "../shell/store.js";
import { addTodo, removeTodo, toggleTodo } from "./todoActions.js";
import {renderTodoView } from "./todoView.js";

export let editingId = null;

export function renderTodo(root){

    root.innerHTML = `
        <h1>Todo App</h1>

        <input type="text" id="todoInput" />
        <button id="addBtn">Add</button>

        <ul id="todoList"><ul>
    `;
    const input = root.querySelector("#todoInput");

    const button = root.querySelector("#addBtn");

    const lists = root.querySelector("#todoList");

    const todo = root.querySelector(".todo")

    function update(){
        renderTodoView(lists);
    }

    button.addEventListener('click', () => {
        store.dispatch(addTodo({
            id: crypto.randomUUID(),
            title: input.value.trim(),
            completed: false,
        }))

        input.value = "";
        console.log(store.getState());
    })

    lists.addEventListener('click', (e) => {
        let list = e.target.closest('[data-id]');
        let id = list.dataset.id
       // console.log(id)

       if(e.target.closest('.updateBtn')){
             editingId = id;
            console.log('test');
        }

        if(e.target.closest('.todo')){
            
         store.dispatch(toggleTodo(id))
        }

        if(e.target.closest('.deleteBtn')) {
         store.dispatch(removeTodo(id));
        console.log(store.getState())
        }

    
        
    })
    store.subscribe(update);

    update();
}