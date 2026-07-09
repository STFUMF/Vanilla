import "./Toolbar.css"
import { component } from "@core/components";

import { Row } from "../Row/Row.js";

export function Toolbar({

    children,

}){

    return component(
        Row,
        {

            justify:"between",

            gap:"md",

            children,

        }
    );
}