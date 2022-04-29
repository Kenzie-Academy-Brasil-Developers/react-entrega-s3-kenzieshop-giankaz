import { ADD_PRODUCT, CHANGE_PRODUCT, CLEAR_PRODUCT, DEL_PRODUCT, FILTER_ALL, FILTER_BRINQUEDOS, FILTER_RACOES, FILTER_REMEDIOS, FILTER_SERVICE } from "./actionType";

export const addProduct = (product) => ({ type: ADD_PRODUCT, product })
export const delProduct = (product) => ({ type: DEL_PRODUCT, product })
export const changeProduct = (product) => ({ type: CHANGE_PRODUCT, product })
export const clearProduct = () => ({type: CLEAR_PRODUCT})



export const filterService = (list) => ({type: FILTER_SERVICE, list})
export const filterRemedios = (list) => ({type: FILTER_REMEDIOS, list})
export const filterRacoes = (list) => ({type: FILTER_RACOES, list})
export const filterBrinquedos = (list) => ({type: FILTER_BRINQUEDOS, list})
export const filterAll = (list) => ({type: FILTER_ALL, list})
