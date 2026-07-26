import { createComponentIdentity } from "../../renderer/identity/createComponentIdentity.js";

const renderCounts = new Map();

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
};
