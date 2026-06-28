import { 
    selectCompletedTodos,
    selectCompletionRate,
    selectRemainingTodos,
    selectTotalTodos 
} from "../mfe_todo/todoSelectors.js";
import { store } from "../shell/store.js";

export function renderStatsView(root){

    const state = store.getState();


    root.innerHTML = `
        <section class="stats">
            <h2>Statistics</h2>
            
            <p>Total: ${selectTotalTodos(state)}</p>

            <p>Completed: ${selectCompletedTodos(state)}</p>

            <p>Remaining: ${selectRemainingTodos(state)}</p>

            <p>Completion: ${selectCompletionRate(state)}%</p>
        </section>
    `;
}