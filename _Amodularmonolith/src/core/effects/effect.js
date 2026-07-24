let currentManager = null;

export function setCurrentEffectManager(manager) {
  currentManager = manager;
}

export function clearCurrentEffectManager() {
  currentManager = null;
}

export function effect(callback, deps = []) {
  if (!currentManager) {
    throw new Error("effect() mst be called while rendering.");
  }
}
