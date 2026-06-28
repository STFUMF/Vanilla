import { store } from "../shell/store.js";
import { renderFilterView } from "./filterView.js";


export function renderFilter(root) {

    function update() {
        renderFilterView(root);
    }

    const unsubscribe = store.subscribe(update);

    console.log(store.getState());
    update();

    return unsubscribe;
}