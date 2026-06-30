import { subscribe } from "../shell/platform/eventBus.js";
import { EVENTS } from "../shell/platform/events.js";
import { renderNotificationView } from "./notificationView.js";


export function renderNotifications(root) {

    let notifications = [];
    let counter = 0;
    const timers = new Map();

    function dismissNotification(id) {
        const timer = timers.get(id);
        if(timer) {
            clearTimeout(timer);
            timers.delete(id);
        }

        notifications = notifications.filter((n) => n.id !== id);
        renderNotificationView(root, notifications, dismissNotification);
    }

    function pushNotification(message, type = "info", duration = 3000) {
        const id = `${Date.now()}-${counter++}`;

        notifications = [
            ...notifications,
            { id, message, type},
        ];

        renderNotificationView(root, notifications, dismissNotification);

        const timer = setTimeout(() => {
            dismissNotification(id);
        }, duration);

        timers.set(id, timer);
    }

    const unsubscribers = [

        subscribe(EVENTS.TOAST, (payload) => {
            pushNotification(
                payload.message,
                payload.type ?? "info",
                payload.duration ?? 3000
            );
        }),

       subscribe(EVENTS.TODO_ADDED, payload => {

            pushNotification(`Added: "${payload.title}"`, "success");
        }),

        subscribe(EVENTS.TODO_REMOVED, payload => {

            pushNotification(`🗑️ "${payload.title}"`, "warning")
        }),

        subscribe(EVENTS.TODO_UPDATED, payload => {

            pushNotification(`Updated: "${payload.title}"`, "info")
        }),

    ];

    renderNotificationView(root, notifications, dismissNotification);

    
    return () => {

        unsubscribers.forEach(unsubscribe => unsubscribe());
        timers.forEach((timer) => clearTimeout(timer));
        timers.clear();
    };

}