import { component } from "@core/components";
import { element } from "@core/renderer";

import { Select } from "../../../shared/components";

export function TodoCategoryFilter({ controller }) {
  return element(
    "div",
    {
      class: "todo-category-filter",
    },

    component(Select, {
      value: controller.getCategory().category,

      options: [
        { value: "all", label: "All" },
        { value: "work", label: "Work" },
        { value: "personal", label: "Personal" },
        { value: "shopping", label: "Shopping" },
        { value: "school", label: "School" },
        { value: "health", label: "Health" },
      ],

      onChange: (e) => controller.setCategoryFilter(e.target.value),
    }),
  );
}
