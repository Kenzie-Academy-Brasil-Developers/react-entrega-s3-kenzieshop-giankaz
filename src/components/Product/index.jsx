import React, { useState } from 'react'
import { dataBase } from '../../database'
import {BsFillCartPlusFill} from 'react-icons/bs'
import { useDispatch, useSelector} from "react-redux";
import { addProductThunk } from "../../store/modules/Products/thunk";
import { addTotal } from '../../store/modules/Total/actions';

export default function Product({setError}) {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)

    const handleAdd = (product) => {
        let result = true
        products.forEach((value) => {
            if (value.id === product.id) {
                result = false
            }
        })

        if (!result) {
            setError(true)
        } else {
            setError(false)
            dispatch(addProductThunk(product))
            dispatch(addTotal(product.price))
        }
    }

  return (
      
      <ul>
          {dataBase.map((value) => {
             const {url, name, price, type, id} = value
             return (
                 <li key={id}>
                     <figure>
                     <img src={url} alt='Imagem' />
                     </figure>
                     <div>
                     <h3>{name}</h3>
                     <p>R$: {price},00 à vista</p>
                     <button onClick={() => handleAdd(value)}>Adcionar ao Carrinho<BsFillCartPlusFill/></button>
                     </div>

                 </li>
             )
            })}
         

      </ul>
      
  )
}
