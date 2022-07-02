import { ADD_TODO } from "./actionTypes";
// import {v4 as uuid} from "uuid"
import {Toggle} from "./actionTypes"

let initState = {
    todos: [
        // {
        //     id: uuid(),
        //     title: "LEARN REDUX",
        //     status: false
        // }
    ]
};

const reducer = (store = initState, { type, payload }) => {
    switch (type) {
        case ADD_TODO: return { ...store, todos: [...store.todos,payload] };
        case Toggle: return {}
        default: return store;
    }
}


export default reducer;