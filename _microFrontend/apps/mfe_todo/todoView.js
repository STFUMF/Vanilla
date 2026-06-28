import { store } from "../shell/store.js";
import { removeTodo } from "./todoActions.js";
import { selectVisibleTodos } from "./todoSelectors.js";
import { createButton } from "../shell/shared/Buttons.js";


export function renderTodoView(container) {


    container.innerHTML = "";


    const state = store.getState();

    const todos = selectVisibleTodos(state);

    const editId = state.editId.editingId;



    if (todos.length === 0) {

        const empty = document.createElement("li");

        empty.className = "empty-state";

        empty.textContent = "No Todos yet.";

        container.append(empty);

        return;
    }



    todos.forEach(todo => {


        const li = document.createElement("li");

        li.dataset.id = todo.id;

        li.className = "todo";



        if (editId === todo.id) {


            const input = document.createElement("input");

            input.className = "editInput";

            input.value = todo.title;



            const saveBtn = createButton({

                text: "Save",

                className: "saveBtn",

                onClick: () => {}

            });



            const cancelBtn = createButton({

                text: "Cancel",

                className: "cancelBtn",

                onClick: () => {}

            });



            li.append(
                input,
                saveBtn,
                cancelBtn
            );


            setTimeout(() => {

                input.focus();

                input.setSelectionRange(
                    input.value.length,
                    input.value.length
                );

            });


            container.append(li);

            return;

        }



        const wrapper = document.createElement("div");


        const title = document.createElement("span");

        title.textContent = todo.title;



        const updateBtn = createButton({

            text: "Update",

            className: "updateBtn",

            onClick: () => {

                store.dispatch({

                    type: "EDITID",

                    payload: todo.id

                });

            }

        });



        const deleteBtn = createButton({

            text: "Delete",

            className: "deleteBtn",

            onClick: () => {

                store.dispatch(
                    removeTodo(todo.id)
                );

            }

        });



        wrapper.append(
            title,
            updateBtn,
            deleteBtn
        );



        li.append(wrapper);



        if (todo.completed) {

            li.style.textDecoration = "line-through";

        }



        container.append(li);

    });

}