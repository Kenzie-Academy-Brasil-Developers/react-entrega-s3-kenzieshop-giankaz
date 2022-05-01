import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addProductThunk } from "../../store/modules/Products/thunk";

export default function Product({ setError }) {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);
	const filteredProducts = useSelector((state) => state.filteredProducts);

	const handleAdd = (product) => {
		let result = true;
		products.forEach((value) => {
			if (value.id === product.id) {
				result = false;
			}
		});

		if (!result) {
			setError(true);
		} else {
			setError(false);
			dispatch(addProductThunk(product));
		}
	};

	return (
		<ul>
			{filteredProducts.map((value) => {
				const { url, name, price, id } = value;
				return (
					<li key={id}>
						<figure>
							<img src={url} alt="Imagem" />
						</figure>
						<div>
							<h3>{name}</h3>
							<p>R$: {price.toFixed(2).toString().replace(".", ",")} à vista</p>
							<button onClick={() => handleAdd(value)}>
								Adicionar ao Carrinho
								<BsFillCartPlusFill />
							</button>
						</div>
					</li>
				);
			})}
		</ul>
	);
}
