export function renderNavigationView(root, items) {

    root.innerHTML = `
        <nav>
            <ul>

                ${items.map(item => `

                    <li>

                        <a
                            href="${item.path}"
                            data-route="${item.path}"
                        >

                            ${item.icon} ${item.label}

                        </a>

                    </li>

                `).join("")}

            </ul>
        </nav>
    `;
}