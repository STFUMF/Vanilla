import { renderFilter } from "./filterPage.js";


export default {
    id: "search",
    root: "#filter-root",
    route: "/filter",
    mount: renderFilter,
    unmount() {},
}