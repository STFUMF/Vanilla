import { subscribe } from "../shell/platform/eventBus.js";
import { EVENTS } from "../shell/platform/events.js";
import { renderToast } from "./notificationView.js";


export function renderNotifications(root) {

    const unsubscribers = [

       subscribe(EVENTS.TODO_ADDED, payload => {

            renderToast(root, `✅ "${payload.title}" added`);
        }),

        subscribe(EVENTS.TODO_REMOVED, payload => {

            renderToast(root, `🗑️ "${payload.title}" removed`)
        }),

        subscribe(EVENTS.TODO_REMOVED, payload => {

            renderToast(root, `✏️ "${payload.title}" updated`)
        }),

    ]
    
    return () => {

        unsubscribers.forEach(unsubscribe => unsubscribe());
    }


}