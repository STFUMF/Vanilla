import { cleanup } from "../graph/cleanup.js";
import { getActiveScope } from "../scope/scopeStack.js";
import { disposeObserver } from "./disposeObserver.js";
import {
  getActiveObserver,
  popObserver,
  pushObserver,
} from "./observerStack.js";

export function createObserver(fn) {
  function observer() {
    if (!observer.active) {
      return;
    }

    cleanup(observer);

    pushObserver(observer);

    try {
      return fn();
    } finally {
      popObserver();
    }
  }

  observer.fn = fn;

  observer.active = true;

  observer.dependencies = new Set();

  observer.children = new Set();

  const parent = getActiveObserver();

  if (parent) {
    parent.children.add(observer);
  }

  const scope = getActiveScope();
  if (scope) {
    scope.add(observer);
  }

  observer.dispose = function () {
    disposeObserver(observer);
  };
  return observer;
}
