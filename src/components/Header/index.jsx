import React, { useEffect, useState } from "react";
import banner from "../../images/banner.png";
import { HeaderStyle } from "./styles.js";
import { BsFillCartFill, BsFillCartXFill } from "react-icons/bs";
import { CgLogIn, CgLogOut } from "react-icons/cg";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
	changeProductThunk,
	clearProductThunk,
	delProductThunk,
	filterProductThunk,
} from "../../store/modules/Products/thunk";
import {
	addTotal,
	delTotal,
	setTotal,
} from "../../store/modules/Total/actions";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { addUser } from "../../store/modules/User/action";
import { useSnackbar } from "notistack";
import { clearProduct } from "../../store/modules/Products/actions";
import { changeLogin } from "../../store/modules/Login/action";

export default function Header() {
	const [open, setOpen] = useState(false);
	const [itemsCart, setItemsCart] = useState(1);
	const { enqueueSnackbar } = useSnackbar();
	const { total, products, user, login } = useSelector((state) => state);
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		setItemsCart(products.length);
		window.localStorage.setItem("@PetStore/cart", JSON.stringify(products));
		let result = 0;
		products.forEach((value) => (result += value.price * value.un));
		dispatch(setTotal(result));
	}, [products]);

	const handleRemove = (product) => {
		dispatch(delProductThunk(product.id));
	};

	const handleTotal = (value, quantity) => {
		dispatch(changeProductThunk(value, quantity));
	};

	const handleFilter = (type) => {
		dispatch(filterProductThunk(type));
	};

	const handleLogout = () => {
		window.localStorage.removeItem("@PetStore/user");
		dispatch(addUser(1));
		enqueueSnackbar(`Logout realizado! Até mais ${user.name}`, {
			variant: "success",
		});
        dispatch(changeLogin(true))
	};

	const handleCompra = () => {
		if (user !== 1) {
			if (products.length > 0) {
				enqueueSnackbar(`Compra realizada com sucesso! Obrigado ${user.name}`, {
					variant: "success",
				});
				dispatch(clearProductThunk());
			} else {
				enqueueSnackbar(`Adicione algum item para prosseguir!`, {
					variant: "error",
				});
			}
		} else {
			enqueueSnackbar(`Realize o Login para finalizar a compra!`, {
				variant: "error",
			});
			setTimeout(() => {
                dispatch(changeLogin(false))
                history.push("/login")
            }, 2000);
		}
	};
	return (
		<HeaderStyle>
			<img
				src={banner}
				alt="PetStore: Rações - Remédios - Serviços"
				className="banner"
				onClick={() => {
					dispatch(changeLogin(true))
					history.push("/");
				}}
			/>
			<section>
				<div className="cart">
					{open ? (
						<BsFillCartXFill
							className="cartIcon"
							size={30}
							onClick={() => setOpen(!open)}
						/>
					) : (
						<BsFillCartFill
							className="cartIcon"
							size={30}
							onClick={() => setOpen(!open)}
						/>
					)}
					{itemsCart > 0 && (
						<p className="itensFlying" onClick={() => setOpen(!open)}>
							{itemsCart}
						</p>
					)}
					{open && (
						<>
							<div className="cartPreview">
								<ul>
									{products.length > 0 ? (
										products.map((value) => {
											return (
												<>
													<li key={value.id}>
														<img
															src={value.url}
															alt="IMG"
															className="cartImg"
														/>
														<h3>{value.name}</h3>
														<div>
															<span>
																Valor: {`R$${value.price.toFixed(2)}`}
															</span>
															<div>
																<p>Unidades: </p>
																<input
																	type="number"
																	min="1"
																	max="20"
																	value={value.un}
																	onChange={(e) =>
																		handleTotal(value, e.target.value)
																	}
																/>
															</div>
														</div>
														<button onClick={() => handleRemove(value)}>
															<FaTrash />
														</button>
													</li>
												</>
											);
										})
									) : (
										<>
											<p>Carrinho Vazio!</p>
											<p>Adicione items ao carrinho.</p>
										</>
									)}
								</ul>
								<div className="total">
									<p>
										Total: R$
										<span className="totalCart">{total.toFixed(2)}</span>
									</p>
									<button onClick={handleCompra}>Finalizar Compra</button>
								</div>

								<div className="arrow"></div>
							</div>
						</>
					)}
				</div>
				{user !== 1 ? (
					<Link onClick={handleLogout} to="/">
						<CgLogOut size={30} />
						LogOut
					</Link>
				) : (
					<Link to="/login" onClick={() => dispatch(changeLogin(false))}>
						<CgLogIn size={30} />
						Login
					</Link>
				)}
			</section>
			<ul className="nav">
				{login ? (
					<>
						<li onClick={() => handleFilter("all")}>Todos</li>
						<li onClick={() => handleFilter("servicos")}>Serviços</li>
						<li onClick={() => handleFilter("racoes")}>Rações</li>
						<li onClick={() => handleFilter("remedios")}>Remédios</li>
						<li onClick={() => handleFilter("brinquedos")}>Brinquedos</li>
					</>
				) : (
					<h1>Faça seu Login para continuar</h1>
				)}
			</ul>
		</HeaderStyle>
	);
}
