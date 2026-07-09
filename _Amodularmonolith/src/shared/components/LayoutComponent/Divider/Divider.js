import "./Divider.css";
import { element } from "@core/renderer";

export function Divider(){

    return element(
        "hr",
        {
            class:"divider",
        }
    );
}