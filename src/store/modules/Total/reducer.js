import { ADD, DEL, SET } from "./actionTypes";

export const TotalReducer = (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state += action.value
        case DEL:
            return state -= action.value
        case SET:
            return state = action.value

        default:
            return state
    }
}