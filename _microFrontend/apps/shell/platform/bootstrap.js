import { getPlugins } from "./pluginResgistery.js";


export function boot() {

    getPlugins().forEach(plugin => {

        const root = document.querySelector(plugin.root);

        plugin.mount(root);
    });
}