import { getPluginStates } from "../shell/platform/pluginManager.js";
import { renderPluginDashboardView } from "./pluginDashboardView.js";


export function renderPluginDashboard(root) {

    function update() {
        renderPluginDashboardView(root, getPluginStates());
    }

    update();

    return () => {
        root.innerHTML = "";
    }
}