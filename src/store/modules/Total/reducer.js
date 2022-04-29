import { ADD, DEL } from "./actionTypes";

export const TotalReducer = (state = 0, action) => {
    switch (action.type) {
        case ADD: 
         return state += action.value
        case DEL:
            console.log(action)
        return state -= action.value

        default:
            return state
    }
}