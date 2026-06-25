
export function Skeleton(container){
    container.innerHTML = `
        <div class="skeleton title"></div>
        <div class="skeleton item"></div>
        <div class="skeleton item"></div>
        <div class="skeleton item"></div>
    `;
}

export function box({ width = "100%", height = "16px", radius = "6px" } = {}) {
    const el = document.createElement("div");

    el.className = "sk-box";
    el.style.width = width;
    el.style.height = height;
    el.style.borderRadius = radius;

    return el;
}

export function line(width = "100%") {
    return box({ width, height: "14px", radius: "4px" });
}

export function stack(count = 3, gap = "8px") {
    const wrap = document.createElement("div");
    wrap.style.display = "flex";
    wrap.style.flexDirection = "column";
    wrap.style.gap = gap;

    for (let i = 0; i < count; i++) {
        wrap.appendChild(line(`${80 - i * 10}%`));
    }

    return wrap;
}

export function TodosSkeleton(container) {
    const wrapper = document.createElement("div");
    wrapper.className = "sk-todos";

    const title = box({ width: "40%", height: "24px" });

    const list = stack(5);

    wrapper.appendChild(title);
    wrapper.appendChild(list);

    container.appendChild(wrapper);
}

export function UserSkeleton(container) {
    const wrapper = document.createElement("div");

    const avatar = box({
        width: "80px",
        height: "80px",
        radius: "50%"
    });

    const info = stack(3);

    wrapper.appendChild(avatar);
    wrapper.appendChild(info);

    container.appendChild(wrapper);
}