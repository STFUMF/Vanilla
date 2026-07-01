import { subscribe } from "../shell/platform/eventBus.js";
import { PLUGIN_DESTROYED, PLUGIN_INITIALIZED, PLUGIN_MOUNTED, PLUGIN_REGISTERED, PLUGIN_UNMOUNTED } from "../shell/platform/pluginEvents.js";
import { getPluginStates } from "../shell/platform/pluginManager.js";
import { renderPluginDashboardView } from "./pluginDashboardView.js";


export function renderPluginDashboard(root) {

    function update() {
        renderPluginDashboardView(root, getPluginStates());
    }

    const unsubscribers = [
        subscribe(PLUGIN_REGISTERED, update),

        subscribe(PLUGIN_INITIALIZED, update),

        subscribe(PLUGIN_MOUNTED, update),

        subscribe(PLUGIN_UNMOUNTED, update),

        subscribe(PLUGIN_DESTROYED, update),
    ]

    update();

    return () => {
        unsubscribers.forEach(unsubscribe => unsubscribe());
        
        root.innerHTML = "";
    }
}