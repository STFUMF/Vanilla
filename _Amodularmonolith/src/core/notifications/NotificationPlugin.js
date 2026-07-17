import { createPlugin } from "@core/plugin";
import { EventTypes } from "../events/eventTypes";

export const NotificationPlugin = createPlugin({
  name: "notifications",

  install({ resolve }) {
    const events = resolve("events");

    events.on(EventTypes.TODO_CREATED, () => {
      events.emit(EventTypes.TOAST_SHOW, {
        message: "Todo created successfully",
        type: "success",
      });
    });

    events.on(EventTypes.TODO_UPDATED, () => {
      events.emit(EventTypes.TOAST_SHOW, {
        message: "Todo updated successfully",
        type: "success",
      });
    });

    events.on(EventTypes.TODO_DELETED, () => {
      events.emit(EventTypes.TOAST_SHOW, {
        message: "Todo deleted successfully",
        type: "success",
      });
    });

    events.on(EventTypes.TODO_OPERATION_FAILED, ({ operation, error }) => {
      events.emit(EventTypes.TOAST_SHOW, {
        message: `${operation} failed: ${error.message}`,
        type: "error",
      });
    });
  },
});
