

export class todoView{
    constructor() {
        this.input = document.querySelector('#todo-input');
        this.addBtn = document.querySelector('#add-btn');
        this.list = document.querySelector('#todo-list');
    }

    getInput(){
        return this.input.value;
    }

    clearInput() {
        this.input.value = "";
    }

    render(todos) {
        this.list.innerHTML = "";

        todos.forEach(todo => {
            const li = document.createElement("li");

            const listWrapper = document.createElement('div');

            const textTodo = document.createElement('span');
            textTodo.style.textDecoration = `${todo.completed ? "line-through" : "none"}`

            const toggleBtn = document.createElement('button');
            toggleBtn.dataset.id = `${todo.id}`
            toggleBtn.className = 'toggle'

            const deleteBtn = document.createElement('button');
            deleteBtn.dataset.id = `${todo.id}`
            deleteBtn.className = 'delete'

            listWrapper.append(textTodo, toggleBtn, deleteBtn)

            this.list.appendChild(listWrapper)
        })
    }
}