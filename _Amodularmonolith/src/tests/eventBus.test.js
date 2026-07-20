import { describe, test, expect } from "@core/testing";

import { createEventBus } from "@core/events";

describe("Event bus", () => {
  test("emits events to listeners", () => {
    const bus = createEventBus();

    let received = null;

    bus.on("hello", (payload) => {
      received = payload;
    });

    bus.emit("hello", "Framework");

    expect(received).toBe("Framework");
  });

  test("unsubscribe removes listener", () => {
    const bus = createEventBus();

    let count = 0;

    const unsubcribe = bus.on("event", () => {
      count++;
    });

    unsubcribe();

    bus.emit("event");

    expect(count).toBe(0);
  });

  // issue
  test("off removes listener", () => {
    const bus = createEventBus();

    let count = 0;

    const listener = () => {
      count++;
    };

    bus.on("event", listener);

    bus.off("event", listener);

    bus.emit("event");

    expect(count).toBe(0);
  });

  test("once only fires once", () => {
    const bus = createEventBus();

    let count = 0;

    bus.once("event", () => {
      count++;
    });

    bus.emit("event");
    bus.emit("event");
    bus.emit("event");

    expect(count).toBe(1);
  });

  test("clear remvoes all listeners", () => {
    const bus = createEventBus();

    let count = 0;

    bus.on("event", () => count++);
    bus.on("event", () => count++);

    bus.clear();

    bus.emit("event");
    expect(count).toBe(0);
  });

  test("has reports registered events", () => {
    const bus = createEventBus();

    expect(bus.has("event")).toBeFalsy();

    bus.on("event", () => {});

    expect(bus.has("event")).toBeTruthy();
  });

  test("returns registered events", () => {
    const bus = createEventBus();

    bus.on("todo:add", () => {});
    bus.on("toast:show", () => {});

    const events = bus.getEvents();

    expect(events).toContain("todo:add");
    expect(events).toContain("toast:show");
  });

  test("listener can unsubscribe during emit", () => {
    const bus = createEventBus();

    let count = 0;

    const unsubscribe = bus.on("event", () => {
      count++;
      unsubscribe();
    });

    bus.emit("event");
    bus.emit("event");

    expect(count).toBe(1);
  });

  test("emitting unknown event does not throw", () => {
    const bus = createEventBus();

    expect(() => {
      bus.emit("does-not-exist");
    }).toBeTruthy();
  });
});
