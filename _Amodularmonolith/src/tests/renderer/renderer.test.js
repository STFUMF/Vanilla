import { describe, expect, test } from "@core/testing";

import { createRenderer } from "@core/renderer";
import { createRenderContext, text } from "@core/renderer";
import { createDom } from "../../core/renderer";
import { fragment, memo, component } from "@core/components";

describe("createRenderer", () => {
  test("throws for invalid container", () => {
    expect(() => {
      createRenderer(null);
    }).toThrow();
  });

  test("creates renderer", () => {
    const root = document.createElement("div");

    const renderer = createRenderer(root);

    expect(renderer).toBeTruthy();

    expect(typeof renderer.render).toBe("function");
  });

  test("renders initial tree", () => {
    const root = document.createElement("div");

    const renderer = createRenderer(root);

    renderer.render(createRenderContext(text("Hello")));

    expect(root.textContent).toBe("Hello");
  });

  test("updates existing tree", () => {
    const root = document.createElement("div");

    const renderer = createRenderer(root);

    renderer.render(createRenderContext(text("One")));

    renderer.render(createRenderContext(text("Two")));

    expect(root.textContent).toBe("Two");
  });

  test("creates text node", () => {
    const dom = createDom(text("Hello"));

    expect(dom.textContent).toBe("Hello");
  });

  test("creates document fragment", () => {
    const dom = createDom(fragment(text("A"), text("B")));

    expect(dom.childNodes.length).toBe(2);
  });

  test("throws for unsupported node", () => {
    expect(() => {
      createDom({
        nodeType: Symbol(),
      });
    }).toThrow();
  });

  test("memosasdsa", () => {
    let renders = 0;
    const root = document.createElement("div");
    const renderer = createRenderer(root);

    const Header = memo(() => {
      renders++;

      return text("Hello");
    });

    renderer.render(createRenderContext(component(Header)));

    renderer.render(createRenderContext(component(Header)));

    expect(renders).toBe(1);
  });

  test("renders component", () => {
    function Hello() {
      return text("Framework");
    }

    const root = document.createElement("div");

    const renderer = createRenderer(root);

    renderer.render(createRenderContext(component(Hello)));

    expect(root.textContent).toBe("Framework");
  });
  test("throws for invalid render context", () => {
    expect(() => {
      renderer.render(null);
    }).toThrow();
  });
});
