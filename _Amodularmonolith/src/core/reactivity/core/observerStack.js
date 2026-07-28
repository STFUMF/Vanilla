const observerStack = [];

export function getActiveObserver() {
  return observerStack.at(-1) ?? null;
}

export function pushObserver(observer) {
  observerStack.push(observer);
}

export function popObserver() {
  observerStack.pop();
}

export function setActiveObserver(observer) {
  observerStack = observer;
}
