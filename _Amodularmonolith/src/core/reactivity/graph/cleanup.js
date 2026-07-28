import { disposeObserver } from "../core/disposeObserver.js";

export function cleanup(observer) {
  // Remove signal subscriptions
  for (const signal of observer.dependencies) {
    signal.subscribers.delete(observer);
  }

  observer.dependencies.clear();

  // Dispose child observers
  for (const child of observer.children) {
    disposeObserver(child);
  }

  observer.children.clear();
}
