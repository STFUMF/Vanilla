import { component } from "@core/components";
import { element } from "@core/renderer";

import { Select } from "../../../shared/components";

export function TodoPriorityFilter({ controller }){

    return element(
        "div",
        {
            class: "todo-priority-filter",
        },

        component(Select, {

            value: controller.getFilters().priority,

            options:[
                { value: "all", label: "All priorities"},
                { value: "low", label: "Low"},
                { value: "medium", label: "Medium" },
                { value: "high", label: "High"}
            ],

            onChange: e =>
                controller.setPriorityFilter(e.target.value),
        }),
    );
}