import { createTestingState } from "./createTestingState.js";

export function createTestRunner() {
  const state = createTestingState();

  return {
    describe(name, callback) {
      const suite = { name, tests: [] };

      state.currentSuite = suite;

      callback();

      state.suites.push(suite);

      state.currentSuite = null;
    },

    test(name, callback) {
      state.currentSuite.tests.push({ name, callback });
    },

    getSuites() {
      return state.suites;
    },
  };
}
