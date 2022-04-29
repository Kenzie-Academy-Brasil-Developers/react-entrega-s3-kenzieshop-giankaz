import { ADD_PRODUCT, CHANGE_PRODUCT, DEL_PRODUCT } from "./actionType"

export const ProductReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return state = [...state, action.product]
        case DEL_PRODUCT:
            return state = action.product
        case CHANGE_PRODUCT:
            return state = action.product    


        default:
            return state
    }
}

