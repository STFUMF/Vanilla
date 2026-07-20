import { EventTypes } from "@core/events";

export class ToastController {
  constructor(events) {
    this.events = events;

    this.toasts = [];
    this.nextId = 1;

    this.viewChangedListener = null;

    this.unsubscribeShow = this.events.on(EventTypes.TOAST_SHOW, (toast) =>
      this.add(toast),
    );

    this.usubscribeRemove = this.events.on(EventTypes.TOAST_REMOVE, (id) =>
      this.remove(id),
    );

    this.ubsubscribeClear = this.events.on(EventTypes.TOAST_CLEAR, () =>
      this.clear(),
    );
  }

  setViewChangedListener(listener) {
    this.viewChangedListener = listener;
  }

  getToasts() {
    return [...this.toasts];
  }

  add(toast) {
    const id = toast.id ?? this.nextId++;

    const newToast = {
      id,
      type: toast.type ?? "info",
      message: toast.message,
      duration: toast.duration ?? 3000,
    };

    this.toasts = [...this.toasts, newToast];

    this.notify();

    if (newToast.duration > 0) {
      setTimeout(() => {
        this.remove(id);
      }, newToast.duration);
    }

    return id;
  }

  remove(id) {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);

    this.notify();
  }

  clear() {
    this.toasts = [];

    this.notify();
  }

  notify() {
    //  console.log("TOAST NOTIFY", this.viewChangedListener);
    this.viewChangedListener?.();
  }

  destroy() {
    this.unsubscribeShow?.();
    this.usubscribeRemove?.();
    this.unsubscribeClear?.();
  }
}
