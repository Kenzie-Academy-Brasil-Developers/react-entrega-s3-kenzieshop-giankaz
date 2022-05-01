import { useSnackbar } from "notistack";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { changeHeader, changeLogin } from "../../store/modules/Login/action";
import { addUser } from "../../store/modules/User/action";
import { LoginMain } from "./style";

export default function Login() {
	const [values, setValue] = useState({
		name: "",
		pass: "",
	});
	const { enqueueSnackbar } = useSnackbar();
	const history = useHistory();
	const dispatch = useDispatch();

	const handleLogin = () => {
		if (values.name !== "" && values.pass !== "") {
			window.localStorage.setItem("@PetStore/user", JSON.stringify(values));
			dispatch(addUser(values));
			enqueueSnackbar(`Login Realizado! Bem vindo ${values.name}`, {
				variant: "success",
			  autoHideDuration: 1500,

			});
			setTimeout(() => {
				dispatch(changeHeader(true));
				dispatch(changeLogin(true));
				history.push("/");
			}, 1500);
		} else {
			enqueueSnackbar("Digite seu usuário e senha!", { variant: "error" });
		}
	};
	return (
		<LoginMain>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					handleLogin();
				}}
			>
				<h2>
					Log<span>in</span>
				</h2>
				<input
					type="text"
					placeholder="Nome de usuário"
					value={values.name}
					onChange={(event) =>
						setValue({ ...values, name: event.target.value })
					}
				/>
				<input
					type="password"
					name=""
					id=""
					placeholder="Senha"
					value={values.pass}
					onChange={(event) =>
						setValue({ ...values, pass: event.target.value })
					}
				/>
				<button type="submit">Entrar</button>
			</form>

			<Link to="/register">Cadastre-se</Link>
		</LoginMain>
	);
}
