const renderCounts = new Map();

export const RenderProfiler = {
  onRender({ name, props }) {
    const count = (renderCounts.get(name) ?? 0) + 1;

    renderCounts.set(name, count);

    console.groupCollapsed(`[Render] ${name} (#${count})`);
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
