import { renderTheme } from "./themePage.js";



export default {
    id: "theme",
    root: "#theme-root",
    route: "/",
    mount: renderTheme,
    unmount() {},
}