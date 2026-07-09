import "./EmptyState.css";
import { element } from "@core/renderer";

export function EmptyState({

    title,

    description,

}){

    return element(
        "div",
        {
            class:"empty-state",
        },

        element(
            "h3",
            {},
            title
        ),

        element(
            "p",
            {},
            description
        )
    );
}