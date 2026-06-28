import { store } from "./store.js";



export function mountMicrofrontend(root, renderView) {
    
    function update(){
        renderView(root);
    }

    const unsubscribe = store.subscribe(update);

    update();

    return unsubscribe;
}