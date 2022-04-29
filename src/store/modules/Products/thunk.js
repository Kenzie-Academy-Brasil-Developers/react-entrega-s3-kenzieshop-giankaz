import { addTotal, delTotal } from "../Total/actions"
import { addProduct, changeProduct, clearProduct, delProduct, filterAll, filterBrinquedos, filterRacoes, filterRemedios, filterService } from "./actions"
import { dataBase } from "../../../database"


export const addProductThunk = (product) => (dispatch) => {
    dispatch(addProduct(product))

}
export const delProductThunk = (id) => (dispatch, getStore) => {
    const { products } = getStore()
    const list = products.filter((prod) => {
        return prod.id !== id
    })
    dispatch(delProduct(list))
}

export const changeProductThunk = (item, quantity) => (dispatch, getStore) => {
    const { products } = getStore()
    let newList = []

    products.forEach((value) => {
        if (value.id !== item.id) {
            newList.push({...value})
        } else {
            if (item.un > quantity) {
                dispatch(delTotal(item.price))
            } else {
                dispatch(addTotal(item.price))
            }
          newList.push({...value, un: Number(quantity)})
        }
    })
   
    dispatch(changeProduct(newList))
}


export const filterProductThunk = (type) => (dispatch, getStore) => {
    if (type === 'racoes') {
        const list = dataBase.filter((value) => value.type === 'racao')
        dispatch(filterRacoes(list))
    } else if (type === 'remedios') {
        const list = dataBase.filter((value) => value.type === 'remedio')
        dispatch(filterRemedios(list))
    } else if (type === 'brinquedos') {
        const list = dataBase.filter((value) => value.type === 'brinquedo')
        dispatch(filterBrinquedos(list))
    } else if (type === 'servicos') {
        const list = dataBase.filter((value) => value.type === 'servico')
        dispatch(filterService(list))
    } else if (type === 'all') {
        dispatch(filterAll(dataBase))
    }
        
    
}

export const clearProductThunk = () => (dispatch) => {
    dispatch(clearProduct())
}