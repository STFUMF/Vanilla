export class RenderStrategyRegistry {
  constructor() {
    this.strategies = [];
  }

  register(strategy) {
    this.strategies.push(strategy);
  }

  resolve(instance) {
    return this.strategies.find((strategy) => strategy.match(instance));
  }
}
