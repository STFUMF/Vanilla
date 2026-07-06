import { component } from "../../../core/components/component.js"
import { Modal } from "../Modal/Modal.js";
export function Dialog({ children = [],}) {
    return component(
        Modal,
        {
            open: true,
            children: [
                component(Card, {
                    children,
                }),
            ],
        }
    );
}