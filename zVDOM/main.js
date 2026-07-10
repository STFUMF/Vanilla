import { changed } from "./diffing.js";
import { element, render } from "./renderer.js";

const root = document.getElementById("root");

export function update(parent, newNode, oldNode, index = 0) {
  if (!oldNode) {
    parent.appendChild(render(newNode));
    return;
  }

  if (!newNode) {
    parent.removeChild(parent.childNodes[index]);
    return;
  }

  if (changed(newNode, oldNode)) {
    parent.replaceChild(render(newNode), parent.childNodes[index]);
    return;
  }

  // Compare children
  if (newNode.type) {
    const max = Math.max(newNode.children.length, oldNode.children.length);

    for (let i = 0; i < max; i++) {
      update(
        parent.childNodes[index],
        newNode.children[i],
        oldNode.children[i],
        i,
      );
    }
  }
}

const vdom = element(
  "div",
  { id: "app" },
  element("h1", { class: "title" }, "Hello"),
  element("p", { class: "paragrapH" }, "This is a virtual DOM."),
);

const newTree = element(
  "div",
  null,
  element("h1", null, "Hello"),
  element("p", null, "Count: 1"),
);

root.appendChild(render(vdom));

update(root, newTree, vdom);
const app = document.getElementById("app");

console.log(app.childNodes[1]);
