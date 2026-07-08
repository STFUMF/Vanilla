

import { element } from "../../core/renderer";


export function Select({
    value = "",
    options = [],
    className = "",
    onChange,
}) {
    return element(
        "select",
        {
            value,
            class: `select ${className}`.trim(),
            onChange,
        },
        ...options.map((option) =>
            element(
                "option",
                {
                    value: option.value,
                    selected: option.value === value,
                },
                option.label
            )
        )
    );
}