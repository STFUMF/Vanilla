import { createTestRunner } from "./createTestRunner.js";

export const runner = createTestRunner();

export const describe = runner.describe.bind(runner);

export const test = runner.test.bind(runner);

export * from "./expect.js";
export * from "./runTests.js";
