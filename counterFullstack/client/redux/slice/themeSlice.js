let initialState = 'light';

export function themeSlice(state = initialState, action){

    switch(action.type){
        case 'TOGGLE_THEME':
            return state === 'light' ? 'dark' : 'light'
        
        default:
            return state
    }
}

export const themeAction = {

    toggleTheme(){
        type: "TOGGLE_THEME"
    }
}