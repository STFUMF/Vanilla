import { createEventBusState } from "./createEventBusState.js";
import { emit } from "./emit.js";
import { on } from "./on.js";
import { off } from "./off.js";
import { once } from "./once.js";
import { clear } from "./clear.js";

/**
 * Creates an event bus.
 *
 * @returns {object}
 */
export function createEventBus() {
  const state = createEventBusState();

  return {
    emit(event, payload) {
      emit(state, event, payload);
    },

    on(event, listener) {
      return on(state, event, listener);
    },

    off(event, listener) {
      off(state, event, listener);
    },

    once(event, listener) {
      once(state, event, listener);
    },

    clear() {
      clear(state);
    },

    has(event) {
      return state.listener.has(event);
    },

    getEvents() {
      return [...state.listeners.keys()];
    },
  };
}
