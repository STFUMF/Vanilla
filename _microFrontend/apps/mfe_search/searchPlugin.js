import { renderSearch } from "./searchPage.js";


export default {
    id: "search",
    root: "#search-root",
    route: "/",
    mount: renderSearch,
    unmount() {},
}