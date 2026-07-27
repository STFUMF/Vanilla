import { resolveNode } from "../../components/resolve/resolveNode.js";
import { renderComponent } from "../component/renderComponent.js";
import { memoStage } from "../middleware/memoStage.js";
import { profilerStage } from "../middleware/profilerStage.js";
import { composeRenderPipeline } from "./composeRenderPipeline.js";

export function createRenderPipeline() {
  return composeRenderPipeline([profilerStage, memoStage])(renderComponent);
}
