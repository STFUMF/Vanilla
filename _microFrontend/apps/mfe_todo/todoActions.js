import { todoEvents } from "./todoEvents.js"

    export function addTodo(data){
        return {
            type: todoEvents.CREATED,
            payload: data,
        }
    }

    export function removeTodo(id){
        return {
            type: todoEvents.DELETED,
            payload: id
        }
    }

    export function toggleTodo(id){
        return {
            type: todoEvents.TOGGLED,
            payload: id
        }
    }
