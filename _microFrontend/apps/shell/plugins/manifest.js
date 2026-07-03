
export default [
    {
        id: "todo",
        eager: false,

        menu: {
            label: "Todos",
            icon: "📝",
            order: 1
        },
        routes: [
            {
                path: "/",
                title: "Todo"
            },
            {
                path: "/todos",
                title: "Todo"
            },
            {
                path: "/todos/:id",
                title: "Todo Details"
            }
        ],

        loader: () => import("../../mfe_todo/todoPlugin.js"),
    },
    {
        id: "filter",
        eager: false,
        loader: () => import("../../mfe_filter/filterPlugin.js"),
    },
    {
        id: "search",
        loader: () => import("../../mfe_search/searchPlugin.js"),
    },
    {
        id: "notifications",
        eager: true,
        loader: () => import("../../mfe_notification/notificationPlugin.js"),
    },
    {
        id: "stats",
        eager: false,

        menu: {
            label: "Statistics",
            icon: "📊",
            order: 2,
        },
        routes: [
            {
                path: "/stats",
                title: "Statistics"
            }
        ],

        loader: () => import("../../mfe_stats/statsPlugin.js"),
    },
    {
        id: "theme",
        loader: () => import("../../mfe_theme/themePlugin.js"),
        eager: false,

        menu: {
            label: "Settings",
            icon: "⚙️",
            order: 3
        },
        routes:[
            {
                path: "/settings",
                title: "Theme"
            }
        ],
    },
    
    {
        id: "plugin-dashboard",
        eager: false,
        loader: () => import("../../mfe_pluginDashboard/plugin.js")
    },

    {
        id: "navigation",
        eager: true,
        loader: () => import("../../mfe_navigation/navigationPlugin.js")
    },

    {
        id: "not-found",
        eager: false,
        routes: [],
        loader: () => import("../../mfe_notFound/plugin.js")
    }
]