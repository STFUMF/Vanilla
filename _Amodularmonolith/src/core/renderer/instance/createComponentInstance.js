let nextInstanceId = 1;

export function createComponentInstance(node) {
  return {
    id: nextInstanceId++,

    component: node.component,

    props: node.props,

    options: node.options,

    vnode: null,
    previousVnode: null,

    dom: null,

    observer: null,

    scope: null,

    strategy: null,

    mounted: false,

    status: "created",

    parent: null,

    children: [],
  };
}
