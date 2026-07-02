
import { getNavigationItems } from "../shell/platform/pluginManager.js"
import {renderNavigationView} from "./navigationView.js"

import { navigate } from "../shell/platform/router/router.js";

export function renderNavigation(root) {

    renderNavigationView(
        root, getNavigationItems()
    );

    function handleClick(event) {

        const link = event.target.closest("[data-route]");

        if (!link){
            return;
        }

        event.preventDefault();
        navigate(link.dataset.route);
    }

    root.addEventListener("click", handleClick);

    return () => {

        root.removeEventListener("click", handleClick);

        root.innerHTML = "";
    };
}