import { cleanup } from "../graph/cleanup.js";

export function disposeObserver(observer) {
  if (!observer.active) {
    return;
  }

  observer.active = false;
  cleanup(observer);
}
