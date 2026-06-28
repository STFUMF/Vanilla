
import { store } from "../shell/store.js";
import { setSearchQuery } from "./searchActions.js";
import { selectSearchQuery } from "./searchSelectors.js";

export function renderSearchView(root) {
    let input = root.querySelector("#searchInput");

    if (!input) {
        root.innerHTML = `
            <input
                id="searchInput"
                type="text"
                placeholder="Search todos..."
            />
        `;

        input = root.querySelector("#searchInput");

        input.addEventListener("input", (e) => {
            store.dispatch(setSearchQuery(e.target.value));
        });
    }

    const query = selectSearchQuery(store.getState());

    if (input.value !== query) {
        input.value = query;
    }


}