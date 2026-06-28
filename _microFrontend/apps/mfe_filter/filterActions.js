
export const SET_FILTER = "SET_FILTER";

export const FILTERS = {
    ALL: "ALL",
    ACTIVE: "ACTIVE",
    COMPLETED: "COMPLETED",
};

export function setFilter(filter){
    return {
        type: SET_FILTER,
        payload: filter
    };
};

