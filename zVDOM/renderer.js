export function element(type, props, ...children) {
  return {
    type,
    props: props || {},
    children,
  };
}

export function render(vnode) {
  // Text node
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }

  // Element
  const el = document.createElement(vnode.type);

  // Set attributes
  for (const key in vnode.props) {
    el.setAttribute(key, vnode.props[key]);
  }

  //Render children
  vnode.children.forEach((child) => {
    el.appendChild(render(child));
  });

  return el;
}
