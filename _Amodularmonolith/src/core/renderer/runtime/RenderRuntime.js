let instanceManager;

let strategyRegistry;

let activeRenderContext = null;

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

export function getActiveRenderContext() {
  return activeRenderContext;
}

export function setActiveRenderContext(context) {
  activeRenderContext = context;
}

export function clearActiveRenderContext() {
  activeRenderContext = null;
}
