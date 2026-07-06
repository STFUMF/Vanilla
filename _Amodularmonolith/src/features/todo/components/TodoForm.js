import { component } from "@core/components";

import { Button, Input } from "../../../shared/components";

export function TodoForm({title, onInput, onSubmit,}) {

    return [
        component(Input, {
            value: title,
            className: 'todoInput',
            onInput,
        }),

        component(Button, {
            onClick: onSubmit,
            children: ["Add"],
        }),
    ];
}