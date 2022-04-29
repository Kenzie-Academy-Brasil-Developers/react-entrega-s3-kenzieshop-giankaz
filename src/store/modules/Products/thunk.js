import { addTotal, delTotal } from "../Total/actions"
import { addProduct, changeProduct, delProduct } from "./actions"



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