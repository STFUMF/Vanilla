import { component } from "@core/components";

import { Badge } from "../../../shared/components";

export function PriorityBdage({ priority }) {

    return component(Badge, {

        text: priority,
        variant: priority,
    });
}