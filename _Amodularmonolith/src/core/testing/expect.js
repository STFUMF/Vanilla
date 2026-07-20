export function expect(received) {
  return {
    toBe(expected) {
      if (received !== expected) {
        throw new Error(`Expected ${expected} but received ${received}`);
      }
    },

    toEqual(expected) {
      if (JSON.stringify(received) !== JSON.stringify(expected)) {
        throw new Error("Objects are not equal.");
      }
    },

    toBeTruthy() {
      if (!received) {
        throw new Error(`Expected value to be truthy but received ${received}`);
      }
    },

    toBeFalsy() {
      if (received) {
        throw new Error(`Expected value to be falsy but received ${received}`);
      }
    },

    toBeNull() {
      if (received !== null) {
        throw new Error(`Expected null but received ${received}`);
      }
    },

    toBeUndefined() {
      if (received !== undefined) {
        throw new Error(`Expected undefined but received ${received}`);
      }
    },

    toContain(expected) {
      if (!received.includes(expected)) {
        throw new Error(
          `Expected ${JSON.stringify(received)} to contain ${expected}`,
        );
      }
    },

    toThrow() {
      if (typeof received !== "function") {
        throw new Error("Expected a function.");
      }

      let threw = false;

      try {
        received();
      } catch {
        threw = true;
      }

      if (!threw) {
        throw new Error("Expected function to throw.");
      }
    },
  };
}
