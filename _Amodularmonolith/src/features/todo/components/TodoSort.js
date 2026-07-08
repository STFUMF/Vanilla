import { component } from "@core/components";
import { element } from "@core/renderer";

import { Select } from "../../../shared/components";

export function TodoSort({ controller }) {
    return element(
        "div",
        {
            class: "todo-form",
        },

        component(Select, {
            value: controller.getSort(),
            className: "todoSelect",
            options: [
                { value: "created-desc", label: "Newest" },
                { value: "created-asc", label: "Oldest" },
                { value: "title", label: "Title (A-Z)" },
            ],
            onChange: (e) => controller.setSort(e.target.value),
        }),

    );
}