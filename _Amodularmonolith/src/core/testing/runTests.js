import { runner } from "./index.js";

export async function runTests() {
  let passed = 0;
  let failed = 0;

  for (const suite of runner.getSuites()) {
    console.group(`📦 ${suite.name}`);

    for (const test of suite.tests) {
      try {
        await test.callback();

        console.log(`✅ ${test.name}`);

        passed++;
      } catch (error) {
        await console.error(`❌ ${test.name}`, error.message);

        failed++;
      }
    }

    console.groupEnd();
  }

  console.groupEnd();

  console.log("");

  console.log(`✨  ${passed} passed, ${failed} failed`);
}
