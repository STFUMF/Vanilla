import { store } from "../shell/store.js";
import { addTodo, removeTodo, toggleTodo, updateTodo } from "./todoActions.js";
import {renderTodoView } from "./todoView.js";


export function renderTodo(root){
    console.log(store.getState());
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

    function handleAddTodo(){
        const title = input.value.trim();

        if (!title){
            return;
        }

        store.dispatch(addTodo({
            id: crypto.randomUUID(),
            title,
            completed: false,
        }))

        input.value = "";
       // input.focus();
    }

    button.addEventListener('click', handleAddTodo)
    input.addEventListener('keydown', (e) => {
        if (e.key === "Enter"){
            handleAddTodo();
        }
    });

    lists.addEventListener('click', (e) => {
        let list = e.target.closest('[data-id]');
        let id = list.dataset.id
       // console.log(id)

       if(e.target.closest('.updateBtn')){
             store.dispatch({type: "EDITID", payload: id})
             console.log(store.getState().editId.editingId)
        }

        if(e.target.closest('.todo')){
            
         store.dispatch(toggleTodo(id))
        }

        if(e.target.closest('.deleteBtn')) {
         store.dispatch(removeTodo(id));
        console.log(store.getState())
        }

        if(e.target.closest('.saveBtn')){
            const row = e.target.closest('li'); 
            const editInput = row.querySelector('.editInput');
            store.dispatch(
                updateTodo(id, editInput.value)
            )
            store.dispatch(
                {type: 'EDITID', payload: null}
            )
        }
        if(e.target.closest('.cancelBtn')){
            store.getState().editId
            console.log(store.getState())
        }
        
    })
    store.subscribe(update);

    update();
}