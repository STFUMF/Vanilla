

export function filterSlice(state = "all", action) {

    switch(action.type){
        case "SET_FILTER":
            return action.payload;

        default:
            return state;
    }
}

export const filterAction = {
    
    setFilter(data){
        return{
            type: "SET_FILTER",
            payload: data
        }
    }
}