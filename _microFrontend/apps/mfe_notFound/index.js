export function renderNotFound(root) {

    root.innerHTML = `
        <section>
            <h1>404</h1>

            <p>Page not found.</p>
        </section>
    `;

    return () => {
        root.innerHTML = "";
    };

}