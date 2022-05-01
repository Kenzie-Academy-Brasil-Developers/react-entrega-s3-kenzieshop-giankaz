import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { BsFillCartFill, BsFillCartXFill } from "react-icons/bs";
import { CgLogIn, CgLogOut } from "react-icons/cg";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import banner from "../../images/banner.png";
import { changeHeader, changeLogin } from "../../store/modules/Login/action";
import {
	changeProductThunk,
	delProductThunk,
	filterProductThunk,
} from "../../store/modules/Products/thunk";
import { setTotal } from "../../store/modules/Total/actions";
import { addUser } from "../../store/modules/User/action";
import { HeaderStyle } from "./styles.js";

export default function Header() {
	const [open, setOpen] = useState(false);
	const [itemsCart, setItemsCart] = useState(1);
	const { enqueueSnackbar } = useSnackbar();
	const { total, products, user, headerInfo } = useSelector(
		(state) => state
	);
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
			autoHideDuration: 3000,
		});
		dispatch(changeHeader(true));
		dispatch(changeLogin(false));
	};

	const handleCompra = () => {
		if (user !== 1) {
			if (products.length > 0) {
				enqueueSnackbar(`Redirecionando para pagamentos, aguarde.`, {
					variant: "success",
			       autoHideDuration: 2000,
				});
				setTimeout(() => {
					setOpen(false);
					history.push("/payment");
				}, 1500);
			} else {
				enqueueSnackbar(`Adicione algum item para prosseguir!`, {
					variant: "error",
		        	autoHideDuration: 3000,

				});
			}
		} else {
			enqueueSnackbar(`Realize o Login para finalizar a compra!`, {
				variant: "error",
			   autoHideDuration: 2000,

			});
			setTimeout(() => {
				setOpen(false);
				dispatch(changeHeader(false));
				history.push("/login");
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
					dispatch(changeHeader(true));
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
																Valor:{" "}
																{`R$${(value.price * value.un).toFixed(2)}`}
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
					<Link to="/login" onClick={() => dispatch(changeHeader(false))}>
						<CgLogIn size={30} />
						Login
					</Link>
				)}
			</section>
			<ul className="nav">
				{headerInfo === true ? (
					<>
						<li onClick={() => handleFilter("all")}>Todos</li>
						<li onClick={() => handleFilter("servicos")}>Serviços</li>
						<li onClick={() => handleFilter("racoes")}>Rações</li>
						<li onClick={() => handleFilter("remedios")}>Remédios</li>
						<li onClick={() => handleFilter("brinquedos")}>Brinquedos</li>
					</>
				) : headerInfo === 1 ? <h1>Realize seu Cadastro</h1> : (headerInfo === 2 ? <h1>Finalize sua compra</h1> : <h1>Realize seu Login para continuar</h1>)}
			</ul>
		</HeaderStyle>
	);
}
