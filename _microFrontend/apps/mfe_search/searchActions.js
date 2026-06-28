export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";

export function setSearchQuery(query) {
    return {
        type: SET_SEARCH_QUERY,
        payload: query,
    };
}