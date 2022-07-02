import { ADD_TODO } from "./actionTypes";
import { Toggle } from "./actionTypes";

export const addTodo = payload=>{
    return{
        type:ADD_TODO,
        payload
    }
}

export const toggle = () => {
    return {
        type: Toggle,
    }
}





