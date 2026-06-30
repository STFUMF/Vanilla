export const SET_THEME = "SET_THEME";

export const THEMES = {
    LIGHT: "light",
    DARK: "dark",
};

export function setTheme(theme) {
    return {
        type: SET_THEME,
        payload: theme
    }
}