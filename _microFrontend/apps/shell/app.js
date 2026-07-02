
import "./platform/allPlugins.js";

const BASE = "/_microFrontend/apps/shell";

import { startThemeManager } from "./platform/themeManager.js";
import {bootstrap } from "./platform/bootstrap.js";
import { navigate, registerRoute, startRouter } from "./platform/router/router.js";
import { subscribe } from "./platform/eventBus.js";
import { ROUTE_CHANGED } from "./platform/router/routeEvents.js";
startThemeManager();
bootstrap();


    