import { renderSearch } from "./searchPage.js";


let cleanup;
export default {
    id: "search",
    version: "1.0.0",
    slot: "search",
    routes:[],
    initialize() {},
    mount(root){
        cleanup = renderSearch(root);
    },
    unmount() {
        cleanup?.();
        cleanup = null;
    },
    destory(){},
}
