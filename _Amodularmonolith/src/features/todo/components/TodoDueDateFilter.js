import {element} from "@core/renderer";
import {component} from "@core/components";

import { Select } from "../../../shared/components";

export function TodoDueDateFilter({ controller }) {

    return element(
        "div",
        {
            class: "todo-due-filter",
        },

        component(Select, {

            value: controller.getFilters().dueDate,

            options: [
                { value: "all", label: "All Dates" },
                { value: "overdue", label: "Overdue" },
                { value: "today", label: "Due Today" },
                { value: "tomorrow", label: "Due Tomorrow" },
                { value: "week", label: "Due This Week" },
                { value: "none", label: "No Due Date" },
            ],

            onChange: e => controller.setDueDateFilter(e.target.value),
        }),
    );
}