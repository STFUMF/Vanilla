import { createComponentIdentity } from "../../renderer/identity/createComponentIdentity.js";

const renderCounts = new Map();
const memoHits = new Map();
const memoMisses = new Map();

export const RenderProfiler = {
  onRender({ identity, name, props }) {
    const count = (renderCounts.get(name) ?? 0) + 1;

    renderCounts.set(name, count);

    console.groupCollapsed(`[Render] ${identity} (#${count})`);
    console.log("Props:", props);
    console.groupEnd();
  },

  getCount(name) {
    return renderCounts.get(name) ?? 0;
  },

  reset() {
    renderCounts.clear();
  },

  getAll() {
    return new Map(renderCounts);
  },

  onMemoHit(identity) {
    return memoHits.set(identity, (memoHits.get(identity) ?? 0) + 1);
  },
  onMemoMiss(identity) {
    return memoMisses.set(identity, (memoMisses.get(identity) ?? 0) + 1);
  },
};
