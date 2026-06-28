import { store } from "./store.js";


export function mountMicrofrontendChanged(root, renderView, selector = state => state) {
    
    let previous = selector(store.getState());

    function update() {
        const current = selector(store.getState());
        
        if (current !== previous) {
            previous = current;
            renderView(root);;
        }
    }

    const unsubscribe = store.subscribe(update);

    renderView(root);

    return unsubscribe;
}