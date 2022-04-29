import { ADD, DEL, SET } from "./actionTypes";

export const addTotal = (value) => ({ type: ADD, value })
export const delTotal = (value) => ({ type: DEL, value })
export const setTotal = (value) => ({ type: SET, value })
