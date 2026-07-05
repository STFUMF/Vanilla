import { element } from "../core/renderer";

export function HomePage() {
    return element(
        "main",
        {},

        element(
            "h1",
            {},
            "Home"
        )
    )
}