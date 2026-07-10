let routes = [];

export const RouterService = {
  setRoutes(value) {
    routes = value;
  },

  getRoutes() {
    return routes;
  },
};
