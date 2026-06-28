import { renderStatsView } from "./statsView.js";
import {store} from "../shell/store.js"
import { mountMicrofrontend } from "../shell/mountMicrofrontend.js";

export function renderStats(root){

    return mountMicrofrontend(root, renderStatsView)
}