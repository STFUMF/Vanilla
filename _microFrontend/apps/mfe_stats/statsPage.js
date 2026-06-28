import { renderStatsView } from "./statsView.js";
import {store} from "../shell/store.js"

export function renderStats(root){

    function update(){
        renderStatsView(root);
    }

    const unsubscribe = store.subscribe(update);

    update();

    return unsubscribe;
}