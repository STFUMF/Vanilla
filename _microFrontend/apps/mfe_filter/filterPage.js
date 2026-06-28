import { mountMicrofrontend } from "../shell/mountMicrofrontend.js";
import { renderFilterView } from "./filterView.js";


export function renderFilter(root) {

    return mountMicrofrontend(root, renderFilterView)
}