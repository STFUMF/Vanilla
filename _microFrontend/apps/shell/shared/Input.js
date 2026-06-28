
export function createInput({value = "", placeHolder = "", onInput}){

    const input = document.createElement("input");

    input.value = value;
    input.placeholder = placeHolder;

    input.addEventListener("input", onInput);

    return input;
}