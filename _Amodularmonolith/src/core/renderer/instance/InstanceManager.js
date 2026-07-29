import { createComponentInstance } from "./createComponentInstance.js";
import { createInstanceIdentity } from "./createInstanceIdentity.js";

export class InstanceManager {
  constructor() {
    this.instances = new Map();
  }

  resolve(node) {
    const identity = createInstanceIdentity(node);

    let instance = this.instances.get(identity);

    if (!instance) {
      instance = createComponentInstance(node);

      this.instances.set(identity, instance);
    } else {
      instance.props = node.props;
      instance.options = node.options;
    }

    return instance;
  }

  get(identity) {
    return this.instances.get(identity);
  }

  dispose(identity) {
    this.instances.delete(identity);
  }
}
