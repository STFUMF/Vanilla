
export default [
    {
        id: "todo",
        loader: () => import("../../mfe_todo/todoPlugin.js"),
    },
    {
        id: "filter",
        loader: () => import("../../mfe_filter/filterPlugin.js"),
    },
    {
        id: "search",
        loader: () => import("../../mfe_search/searchPlugin.js"),
    },
    {
        id: "notifications",
        loader: () => import("../../mfe_notification/notificationPlugin.js"),
    },
    {
        id: "stats",
        loader: () => import("../../mfe_stats/statsPlugin.js"),
    },
    {
        id: "theme",
        loader: () => import("../../mfe_theme/themePlugin.js"),
    },
]