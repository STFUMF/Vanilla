import { getActiveObserver } from "../core/observerStack.js";

export function track(signal) {
  const observer = getActiveObserver();

  if (!observer) {
    return;
  }

  signal.subscribers.add(observer);

  observer.dependencies.add(signal);
}
