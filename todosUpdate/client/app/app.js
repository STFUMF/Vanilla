import { loadState } from "./redux/loadState.js";
import { applyMiddleware } from "./middleware/applyMiddleware.js";
import { persistMiddleware } from "./middleware/persist.js";
import { rootReducer } from "./redux/rootReducer.js";
import { createSelector } from "../selector.js";
import { todosActions } from "./redux/slices/todoSlice.js";
import { createStore } from "../store.js";

const store = createStore(
    rootReducer,
    applyMiddleware(persistMiddleware),
    loadState()
)
console.log(loadState())
console.log(store.getState())

const todoInput =
  document.getElementById("todoInput");

const addBtn =
  document.getElementById("addBtn");

const todoList =
  document.getElementById("todoList");

const completedCount = document.getElementById('completedCount')

    const selectTodos = state => state.todos
    
    const selectCompletedTods = createSelector(
        selectTodos, todos =>{
            console.log('Recomputing')
           return todos.filter(
                todo => todo.completed
            )
        }
    );

function render(){

    const state = store.getState();

    todoList.innerHTML = '';

    state.todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        
        if(todo.completed){
            li.style.textDecoration = 'line-through';
        }

        li.addEventListener('click', () => {
            store.dispatch(todosActions.toggleTodo(todo.id))
        });

        todoList.appendChild(li);
    })

    const completed = selectCompletedTods(state);

    completedCount.textContent = `${completed.length} completed`;
}


addBtn.addEventListener('click', () => {

    const value = todoInput.value.trim();

    if (!value) return;

    store.dispatch(todosActions.addTodo(value))

    console.log(store.getState());
    todoInput.value = '';
})

store.subscribe(render);
render();

const counterBtn = document.getElementById('counterBtn');

counterBtn.addEventListener('click', () => {
    store.dispatch({type: "increment"})
})