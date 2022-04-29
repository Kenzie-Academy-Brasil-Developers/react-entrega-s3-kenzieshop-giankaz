import React, { useEffect, useState } from "react";
import banner from "../../images/banner.png";
import { HeaderStyle } from "./styles.js";
import { BsFillCartFill } from "react-icons/bs";
import { CgLogIn } from "react-icons/cg";
import {FaTrash} from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import { changeProductThunk, delProductThunk } from "../../store/modules/Products/thunk";
import { addTotal, delTotal } from "../../store/modules/Total/actions";


export default function Header() {    

    
    const total = useSelector((state) => state.total)
    const products = useSelector((state) => state.products)
    console.log(products)
    const dispatch = useDispatch()
    


    const handleRemove =(product) => {
        const itemTotal = product.price * product.un
        dispatch(delProductThunk(product.id))
        dispatch(delTotal(itemTotal))
    }

    const handleTotal = (value, quantity) => {
        dispatch(changeProductThunk(value, quantity))
    }
	return (
		<HeaderStyle>
			<img src={banner} alt="PetStore: Rações - Remédios - Serviços" className="banner"/>
			<section>
					<div className="cart" onMouseEnter={() => console.log('here')}>
						<BsFillCartFill className='cartIcon' size={30} />
                        <p className="itensFlying">1</p>
                        <div className="cartPreview">
                            <ul>
                            {products.length > 0 ? 
                            products.map((value) => {
                                return (
                                    <>                               
                                <li key={value.id}>
                                    <img src={value.url} alt="IMG" className="cartImg"/>
                                    <h3>{value.name}</h3>
                                    <div>
                                    <span>Valor: {`R$${value.price.toFixed(2)}`}</span>
                                    <div>
                                    <p>Unidades: </p>
                                    <input type="number" min='1' max='20' value={value.un} onChange={(e) => handleTotal(value, e.target.value)}/>
                                    </div>
                                    </div>
                                <button onClick={() => handleRemove(value)}><FaTrash/></button>
                                </li>
                                    </>
                                )
                            })
                            :
                            <>
                                <p>Carrinho Vazio!</p>
                                <p>Adicione items ao carrinho.</p>
                            </>
                            }
                            </ul>
                            <div className="total">
                            <p>Total: R$<span className="totalCart">{total.toFixed(2)}</span></p>
                            <button>Finalizar Compra</button>
                            </div>

                            <div className="arrow"></div>
                        </div>
					</div>
					<a>
						<CgLogIn size={30} />
						Login
					</a>
				</section>
				<ul className="nav">
					<li>Serviços</li>
					<li>Rações</li>
					<li>Remédios</li>
					<li>Brinquedos</li>
				</ul>
			
			

			
		</HeaderStyle>
	);
}
