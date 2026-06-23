import { todoEvents } from "./todo.events";


export const todoActions = {

    add(todo){
        return {
            type: todoEvents.CREATED,
            payload: todo
        };
    },

    toggle(id){
        return {
            type: todoEvents.TOGGLED,
            payload: id
        };
    },
    
    delete(id) {
        return {
            type: todoEvents.DELETED,
            payload: id
        }
    },

    set(todos){
        return {
            type: todoEvents.CREATED,
            payload: todos
        }
    }

}