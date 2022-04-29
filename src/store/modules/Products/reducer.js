import { dataBase } from "../../../database"
import { ADD_PRODUCT, CHANGE_PRODUCT, DEL_PRODUCT, FILTER_BRINQUEDOS, FILTER_RACOES, FILTER_REMEDIOS, FILTER_SERVICE, FILTER_ALL, CLEAR_PRODUCT } from "./actionType"

export const ProductReducer = (state = JSON.parse(window.localStorage.getItem('@PetStore/cart')) || [], action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return state = [...state, action.product]
        case DEL_PRODUCT:
            return state = action.product
        case CHANGE_PRODUCT:
            return state = action.product
        case CLEAR_PRODUCT:
            return state = []


        default:
            return state
    }
}

export const ProductFilter = (state = dataBase, action) => {
    switch (action.type) {
        case FILTER_SERVICE:
            return action.list
        case FILTER_REMEDIOS:
            return action.list
        case FILTER_RACOES:
            return action.list
        case FILTER_BRINQUEDOS:
            return action.list
        case FILTER_ALL:
            return action.list
        default:
            return state
    }
}