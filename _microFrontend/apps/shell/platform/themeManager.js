import { selectTheme } from "../../mfe_theme/themeSelectors.js";
import { store } from "../store.js";

let currentTheme = null;

export function startThemeManager() {

    function applyTheme() {

        const theme = selectTheme(store.getState())

        if (theme === currentTheme) return;

        document.documentElement.dataset.theme = theme;
    };

    store.subscribe(applyTheme);

    applyTheme();
}