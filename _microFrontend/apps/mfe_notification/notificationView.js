import { createToast } from "../shell/shared/Toast.js";

let timeoutId = null;

export function renderNotificationView(root, notifications, dismissNotification){
    root.innerHTML = "";

    const container = document.createElement("div");
    container.className = "toast-stack";

    notifications.forEach((notification) => {
        const toast = createToast({
            message: notification.message,
            type: notification.type,
        });

        toast.querySelector(".toast__close").addEventListener("click", () => {
            dismissNotification(notification.id);
        });

        container.appendChild(toast);
    });

    root.appendChild(container);
}