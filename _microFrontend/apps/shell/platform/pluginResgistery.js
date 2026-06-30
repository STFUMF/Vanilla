

const plugins = [];

export function register(plugin){
    plugins.push(plugin);
}

export function getPlugins() {
    return plugins;
}