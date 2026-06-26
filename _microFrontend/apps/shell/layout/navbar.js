

export function renderNavbar(container) {
    container.innerHTML = `
        <nav class='navvbar'>
            <h2> MY MFE App </h2>

            <ul class="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/todo">Todo</a></li>
                <li><a href="/profile">Profile</a></li>
            </ul>
        </nav>
    `
}