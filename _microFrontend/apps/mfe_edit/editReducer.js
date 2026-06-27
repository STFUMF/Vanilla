
let initialState = {
    editingId: null
}
export function editReducer(state = initialState, action){

    switch(action.type){
        
        case "EDITID":
            return {editingId: action.payload}

        default:
            return state
    }
}