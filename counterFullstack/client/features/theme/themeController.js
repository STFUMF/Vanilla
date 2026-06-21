import { themeAction } from "../../redux/slice/themeSlice.js";




export function toggleTheme(store){

    const themeToggle = document.querySelector('.themeToggle');

    if(!themeToggle) return;
    
    console.log('test')
    themeToggle.addEventListener('click', () => {

        store.dispatch(themeAction.toggleTheme());
        document.querySelector('body').className = store.getState().theme
        console.log(store.getState().theme)
    })
}
