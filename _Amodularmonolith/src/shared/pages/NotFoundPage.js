import { element } from "../../core/renderer";

export function NotFoundPage(){
    return element(
        "main",
        {},
        
        element(
            "h1",
            {},
            "404"
        ),

        element(
            "p",
            {},
            "Page not found."
        )
    );
}