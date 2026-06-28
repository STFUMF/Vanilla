
export function createEmptyState(message) {

    const li = document.createElement("li");

    li.className = "empty-state";
    li.textContent = message;

    return li;
}