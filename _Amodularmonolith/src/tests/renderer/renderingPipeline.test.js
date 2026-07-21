import { describe, test, expect } from "@core/testing";
import { createRenderer, createRenderContext, text } from "@core/renderer";
import { component, memo, fragment } from "@core/components";
import { element } from "../../core/renderer";

describe("Pipeline test 1", () => {
  test("renders text component", () => {
    function App() {
      return text("Hello");
    }

    const root = document.createElement("div");

    const renderer = createRenderer(root);

    renderer.render(createRenderContext(component(App)));

    expect(root.textContent).toBe("Hello");
  });

  test("throws for invalid render context", () => {
    const root = document.createElement("div");

    const renderer = createRenderer(root);

    expect(() => {
      renderer.render(null);
    }).toThrow();
  });
});
