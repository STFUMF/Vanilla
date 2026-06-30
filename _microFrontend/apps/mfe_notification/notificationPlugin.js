import { renderNotifications } from "./notificationPage.js";


export default {
    id: "notifications",
    root: "#notification-root",
    route: "/",
    mount: renderNotifications,
    unmount() {},
}