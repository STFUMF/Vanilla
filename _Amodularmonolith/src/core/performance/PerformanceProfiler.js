const state = {
  renders: 0,
  renderTime: 0,

  memoHits: 0,
  memoMisses: 0,

  selectorHits: 0,
  selectorMisses: 0,
};

export const PerformanceProfiler = {
  increment(metric) {
    if (!(metric in state)) {
      return;
    }
    state[metric]++;
  },

  add(metric, value) {
    if (!(metric in state)) {
      console.warn(`Unkown performance metric "${metric}"`);
      return;
    }
    state[metric] += value;
  },

  getMetrics() {
    return { ...state };
  },

  reset() {
    Object.keys(state).forEach((key) => {
      metrics[key] = typeof state[key] === "number" ? 0 : state[key];
    });
  },
};
