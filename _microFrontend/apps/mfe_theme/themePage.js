import { mountMicrofrontend } from "../shell/mountMicrofrontend.js";
import { renderThemeView } from "./themeView.js";


export function renderTheme(root){

    return mountMicrofrontend(root, renderThemeView);
}