import { renderWithMemo } from "../memo/renderWithMemo.js";

export const MemoStrategy = {
  name: "memo",

  match(instance) {
    return instance.options.memo;
  },

  render(instance) {
    return renderWithMemo(instance);
  },
};
