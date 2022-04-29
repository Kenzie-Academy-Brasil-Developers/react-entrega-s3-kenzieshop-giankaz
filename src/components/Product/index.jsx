import React from 'react'
import { dataBase } from '../../database'
import {BsFillCartPlusFill} from 'react-icons/bs'
import { useDispatch} from "react-redux";
import { addProductThunk } from "../../store/modules/Products/thunk";
import { addTotal } from '../../store/modules/Total/actions';

export default function Product() {
    const dispatch = useDispatch()

    const handleAdd = (product) => {
        dispatch(addProductThunk(product))
        dispatch(addTotal(product.price))
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
