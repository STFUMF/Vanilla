
import filter from "../../mfe_filter/filterPlugin.js";
import notification from "../../mfe_notification/notificationPlugin.js";
import search from "../../mfe_search/searchPlugin.js";
import stats from "../../mfe_stats/statsPlugin.js";
import theme from "../../mfe_theme/themePlugin.js";
import todo from "../../mfe_todo/todoPlugin.js";

import { register } from "./pluginResgistery.js"

[
    filter,
    notification,
    search,
    stats,
    theme,
    todo,

].forEach(register);