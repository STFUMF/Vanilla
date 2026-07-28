import { cleanup } from "../graph/cleanup.js";
import { createObserver } from "./createObserver.js";
import { disposeObserver } from "./disposeObserver.js";
import { popObserver, pushObserver } from "./observerStack.js";

export function effect(fn) {
  const observer = createObserver(fn);

  observer();

  return () => disposeObserver(observer);
}
