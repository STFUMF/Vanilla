import { track } from "../graph/track.js";
import { trigger } from "../graph/trigger.js";
import { EffectScope } from "../scope/EffectScope.js";
import { transaction } from "../transaction/transaction.js";
import { effect } from "./effect.js";
import { getActiveObserver } from "./observerStack.js";

export function signal(initialValue) {
  let value = initialValue;

  const subscribers = new Set();

  function read() {
    track(read);

    return value;
  }

  read.subscribers = subscribers;

  read.set = function (nextValue) {
    if (Object.is(value, nextValue)) {
      return;
    }

    value = nextValue;

    trigger(read);
  };

  read.subscribe = function (listener) {
    subscribers.add(listener);

    return () => {
      subscribers.delete(listener);
    };
  };

  return read;
}
