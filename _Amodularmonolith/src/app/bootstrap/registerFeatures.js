import { TodoPlugin } from "../../features/todo/TodoPlugin.js";
import { ArchivePlugin } from "../../features/todo/pages/Archived/ArchivePlugin.js";
import { LoggerPlugin } from "../../core/plugin/LoggerPlugin.js";
import { DebugPlugin } from "../../core/debug/DebugPlugin.js";
import { InspectorPlugin } from "../../core/plugin/InspectorPlugin.js";
import { DashboardRoutesPlugin } from "../../features/Dashboard/DashboardRoutesPlugin.js";
import { AboutRoutesPlugin } from "../../features/About/AboutRoutesPlugin.js";
import { NotificationPlugin } from "../../core/notifications/NotificationPlugin.js";

export function registerFeatures(app) {
  app
    .use(NotificationPlugin)
    .use(LoggerPlugin)
    .use(DebugPlugin)
    .use(InspectorPlugin)

    .use(TodoPlugin)

    .use(ArchivePlugin)
    .use(AboutRoutesPlugin)
    .use(DashboardRoutesPlugin);

  return app;
}
