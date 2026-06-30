import { store } from "../shell/store.js";
import { setTheme, THEMES } from "./themeActions.js";
import { selectTheme } from "./themeSelectors.js";


export function renderThemeView(root) {

    const render = () => {
        const currentTheme = selectTheme(store.getState());

        root.innerHTML = "";

        [THEMES.LIGHT, THEMES.DARK].forEach((theme) => {
            const button = document.createElement("button");

            button.textContent = theme;
            button.disabled = currentTheme === theme;

            button.onclick = () => {
                store.dispatch(setTheme(theme));
            };

            root.appendChild(button);
        });
    };

    const unsubscribe = store.subscribe(render);
    render();

    // Returned so the shell can clean up if it supports it.
    return unsubscribe;
}