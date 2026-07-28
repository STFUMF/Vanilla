import { popScope, pushScope } from "./scopeStack.js";

export class EffectScope {
  constructor() {
    this.effects = new Set();

    this.active = true;
  }

  add(observer) {
    if (!this.active) {
      return;
    }

    this.effects.add(observer);
  }

  dispose() {
    if (!this.active) {
      return;
    }

    this.active = false;

    for (const observer of this.effects) {
      observer.dispose();
    }

    this.effects.clear();
  }

  run(fn) {
    pushScope(this);

    try {
      fn();
    } finally {
      popScope();
    }
  }
}
