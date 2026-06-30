
import { renderStats } from "./statsPage.js"

export default {
    id: "search",
    root: "#stats-root",
    route: "/filter",
    mount: renderStats,
    unmount() {},
}