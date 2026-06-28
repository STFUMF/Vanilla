import { store } from "../shell/store.js";

export function renderStatsView(root){

    const todos = store.getState().todos;

    const total = todos.length;

    const completed = todos.filter(todo => todo.completed).length;

    const remaining = total - completed;

    const completionRate = 
        total === 0
            ? 0
            : Math.round((completed / total) * 100);

    root.innerHTML = `
        <section class="stats">
            <h2>Statistics</h2>
            
            <p>Total: ${total}</p>

            <p>Completed: ${completed}</p>

            <p>Remaining: ${remaining}</p>

            <p>Completion: ${completionRate}%</p>
        </section>
    `;
}