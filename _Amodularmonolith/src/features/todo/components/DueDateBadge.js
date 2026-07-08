import { component } from "@core/components";

import { Badge } from "../../../shared/components";

import { getDueDateStatus } from "../../../shared/utils/date/dateStatus.js";

const labels = {
    overdue: "Overdue",
    today: "Today",
    tomorrow: "Tomorrow",
    week: "This Week",
    future: "Upcoming",
}

export function DueDateBadge({ dueDate }) {
    const status = getDueDateStatus(dueDate);


    return component(Badge, {

        text: labels[status],

        variant: status,
    })
}