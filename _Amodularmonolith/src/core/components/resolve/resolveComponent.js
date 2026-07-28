import { createObserver } from "../../reactivity/core/createObserver.js";
import { renderComponent } from "../../renderer/component/renderComponent.js";

import { InstanceManager } from "../../renderer/instance/InstanceManager.js";

import { createRenderPipeline } from "../../renderer/pipeline/createRenderPipeline.js";
import {
  getInstanceManager,
  getRenderStrategyRegistry,
} from "../../renderer/runtime/RenderRuntime.js";
import { RenderStrategyRegistry } from "../../renderer/strategy/RenderStrategyRegistry.js";

import { resolveNode } from "./resolveNode.js";

/**
 * Resolves a component tree into a UI tree
 *
 * @param {object} node
 * @returns {object}
 */

export function resolveComponent(instance, context) {
  const vnode = instance.component(instance.props);

  instance.previousVNode = instance.vnode;
  instance.vnode = vnode;

  return resolveNode(vnode, context);
}
