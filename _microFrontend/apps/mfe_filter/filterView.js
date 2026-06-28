import { store } from "../shell/store.js";
import { FILTERS, setFilter } from "./filterActions.js";
import { selectFilter } from "./filterSelectors.js";


export function renderFilterView(root) {

    const filter = selectFilter(
        store.getState()
    );

 root.innerHTML = `
        <button data-filter="${FILTERS.ALL}">
            All
        </button>

        <button data-filter="${FILTERS.ACTIVE}">
            Active
        </button>

        <button data-filter="${FILTERS.COMPLETED}">
            Completed
        </button>
    `;

    root
        .querySelectorAll("button")
        .forEach(buttons => {

            if (buttons.dataset.filter === filter) {
                buttons.disabled = true;
            }
                
            buttons.addEventListener("click", () => {


    store.dispatch(
        setFilter(buttons.dataset.filter)
    );

            console.log(buttons.dataset.filter)
            });

        });

        
}