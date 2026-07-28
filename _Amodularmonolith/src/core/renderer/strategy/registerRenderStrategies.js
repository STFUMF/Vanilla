import { DefaultStrategy } from "./DefaultStrategy.js";
import { ReactiveStrategy } from "./ReactiveStrategy.js";
import { RenderStrategyRegistry } from "./RenderStrategyRegistry.js";

export function createRenderStrategyRegistry() {
  const registry = new RenderStrategyRegistry();

  registry.register(ReactiveStrategy);
  registry.register(DefaultStrategy);

  return registry;
}
