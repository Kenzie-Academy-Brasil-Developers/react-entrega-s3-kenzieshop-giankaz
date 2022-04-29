import { ADD_PRODUCT, CHANGE_PRODUCT, DEL_PRODUCT } from "./actionType";

export const addProduct = (product) => ({ type: ADD_PRODUCT, product })
export const delProduct = (product) => ({ type: DEL_PRODUCT, product })
export const changeProduct = (product) => ({ type: CHANGE_PRODUCT, product })