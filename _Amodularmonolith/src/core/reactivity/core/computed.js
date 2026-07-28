import { effect } from "./effect.js";
import { signal } from "./signal.js";

export function computed(fn) {
  const value = signal();

  effect(() => {
    value.set(fn());
  });

  return value;
}

const show = signal(true);

effect(() => {
  if (show()) {
    effect(() => {
      console.log("Nested");
    });
  }
});
