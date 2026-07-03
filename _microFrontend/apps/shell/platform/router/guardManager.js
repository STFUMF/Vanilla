
const guards = [];

export function registerGuard(guard) {

    guards.push(guard);
}

export async function canNavigate(to, from) {

    for (const guard of guards) {

        const allowed = await guard(to, from);

        if (!allowed) {
            return false;
        }
    }

    return true;
}