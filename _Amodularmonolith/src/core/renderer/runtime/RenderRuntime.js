let instanceManager;

let strategyRegistry;

export function initializeRendererRuntime({
  instanceManager: manager,
  renderStrategyRegistry: registry,
}) {
  instanceManager = manager;
  strategyRegistry = registry;
}

export function getInstanceManager() {
  return instanceManager;
}

export function getRenderStrategyRegistry() {
  return strategyRegistry;
}
