import { describe, test, expect } from "@core/testing";
import { component } from "@core/components/component";
import { COMPONENT_TYPE } from "@core/components/constants";
import { createFragment } from "@core/components";
import { resolveNode } from "@core/components/resolve/resolveNode";
import { resolveChildren } from "@core/components/resolve/resolveChildren";
import { createTextNode } from "../../core/components/createTextNode.js";
import { createRenderer, createRenderContext, text } from "@core/renderer";

describe("component", () => {
  test("creates component node", () => {
    function Header() {}

    const node = component(Header);

    expect(node.nodeType).toBe(COMPONENT_TYPE);

    expect(node.component).toBe(Header);
  });

  test("passes children", () => {
    function Header() {}

    const node = component(
      Header,

      {},

      "Hello",

      "World",
    );

    expect(node.props.children.length).toBe(2);
  });

  test("renders initial tree", () => {
    const root = document.createElement("div");

    const renderer = createRenderer(root);

    renderer.render(createRenderContext(text("Hello")));

    expect(root.textContent).toBe("Hello");
  });

  test("passes props", () => {
    function Header() {}

    const node = component(
      Header,

      {
        title: "Framework",
      },
    );

    expect(node.props.title).toBe("Framework");
  });
  test("returns text node", () => {
    const text = createTextNode("Hello");

    expect(resolveNode(text)).toBe(text);
  });
  test("returns fragment unchanged", () => {
    const fragment = createFragment([]);

    expect(resolveNode(fragment)).toBe(fragment);
  });

  test("resolves component", () => {
    function Hello() {
      return text("Framework");
    }

    const node = component(Hello);

    const result = resolveNode(node);

    expect(result.value).toBe("Framework");
  });
  test("handles empty children", () => {
    expect(resolveChildren([])).toEqual([]);
  });

  test("resolves multiple children", () => {
    const children = [text("A"), text("B")];

    expect(resolveChildren(children).length).toBe(2);
  });
});
