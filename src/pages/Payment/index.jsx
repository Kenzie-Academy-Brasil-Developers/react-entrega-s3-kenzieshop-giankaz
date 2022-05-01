import { useSnackbar } from "notistack";
import React, { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { changeHeader } from "../../store/modules/Login/action";
import {
  changeProductThunk, clearProductThunk, delProductThunk
} from "../../store/modules/Products/thunk";
import { PaymentMain } from "./style";

export default function Payment() {
	const { products, total } = useSelector((state) => state);
	const dispatch = useDispatch();
	const history = useHistory();
	const { enqueueSnackbar } = useSnackbar();
	const handleRemove = (product) => {
		dispatch(delProductThunk(product.id));
	};
	useEffect(() => {
		dispatch(changeHeader(2))
	}, [])

	useEffect(() => {
		if (products.length <= 0) {
			enqueueSnackbar(`Carrinho vazio, redirecionando para home`, {
				variant: "warning",
			autoHideDuration: 3000,

			});
			setTimeout(() => {
				history.push("/");
			}, 3000);
		}
	}, [products]);

	const handleTotal = (value, quantity) => {
		dispatch(changeProductThunk(value, quantity));
	};
	const handleCompra = () => {
		enqueueSnackbar(`Processando pagamento, aguarde!`, {
			variant: "info",
			autoHideDuration: 2500,
		});
		setTimeout(() => {
	   	dispatch(changeHeader(true))
			enqueueSnackbar(`Pagamento Realizado! Obrigado!`, {
				variant: "success",
		     	autoHideDuration: 3000,

			});
			history.push("/");
			setTimeout(() => dispatch(clearProductThunk()), 400);
		}, 3000);
	};
	return (
		<PaymentMain>
			<section>
				<ul>
					{products.map((value) => {
						return (
							<li key={value.id}>
								<img src={value.url} alt="IMG" className="cartImg" />
								<h3>{value.name}</h3>
								<div className="paymentOptions">
									<span>
										Valor: {`R$${(value.price * value.un).toFixed(2)}`}
									</span>
									<div>
										<p>Unidades: </p>
										<input
											type="number"
											min="1"
											max="20"
											value={value.un}
											onChange={(e) => handleTotal(value, e.target.value)}
										/>
									</div>
								</div>
								<button className="trash" onClick={() => handleRemove(value)}>
									<FaTrash size={20} />
								</button>
							</li>
						);
					})}
				</ul>
			</section>

			<div className="total">
				<p>
					Total: R$
					<span className="totalCart">{total.toFixed(2)}</span>
				</p>
				<button onClick={handleCompra}>Efetuar Pagamento</button>
			</div>
		</PaymentMain>
	);
}
