import { mountMicrofrontend } from "../shell/mountMicrofrontend.js";
import { mountMicrofrontendChanged } from "../shell/onlyRenderWhenChanged.js";
import { store } from "../shell/store.js";
import { renderSearchView } from "./searchView.js";


export function renderSearch(root){

    return mountMicrofrontend(root, renderSearchView);
}