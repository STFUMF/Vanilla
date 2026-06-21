import { countAction } from "../../redux/slice/countSlice.js"


export function counterController(store){
    const counter = document.getElementById('counter');

    const incrementBtn = document.querySelector('.incrementBtn')
    const decrementBtn = document.querySelector('.decrementBtn')

    if (!incrementBtn && !decrementBtn) return;
    
    incrementBtn.addEventListener('click', () => {
        store.dispatch(countAction.increment())
    })

    decrementBtn.addEventListener('click', () => {
        store.dispatch(countAction.decrement());
    })

    function render(){
        counter.textContent = store.getState().count
    }

    store.subscribe(render);
    render();
}