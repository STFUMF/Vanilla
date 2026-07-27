import { RenderProfiler } from "../../components/profiler/RenderProfiler.js";
import { createComponentIdentity } from "../identity/createComponentIdentity.js";

export function profilerStage(next) {
  return function (node) {
    RenderProfiler.onRender({
      identity: createComponentIdentity(node),
      name: node.component.name,
      props: node.props,
    });

    return next(node);
  };
}
