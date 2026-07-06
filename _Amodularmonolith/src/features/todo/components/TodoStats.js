import { element } from "@core/renderer";

export function TodoStats({total, completed, remaining}) {

    return element(
        "section",
        {
            class: "todo-stats",
        },

        element(
            "span",
            {},
            `Total: ${total}`
        ),

        element(
            "span",
            {},
            `Completed: ${completed}`
        ),

        element(
            "span",
            {},
            `Remaining: ${remaining}`
        )
    );
}