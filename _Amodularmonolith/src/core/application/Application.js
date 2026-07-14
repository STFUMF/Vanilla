export class Application {
  constructor() {
    this.config = null;

    this.store = null;

    this.router = null;

    this.renderer = null;

    this.root = null;

    this.controllers = [];
  }
  setConfig(config) {
    this.config = config;
  }

  setStore(store) {
    this.store = store;
  }

  setRouter(router) {
    this.router = router;
  }

  setRenderer(renderer) {
    this.renderer = renderer;
  }

  setRoot(root) {
    this.root = root;
  }
}
