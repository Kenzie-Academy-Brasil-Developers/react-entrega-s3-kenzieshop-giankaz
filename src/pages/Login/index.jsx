import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Api from "../../Api";
import { changeHeader, changeLogin } from "../../store/modules/Login/action";
import { addUser } from "../../store/modules/User/action";
import { LoginMain } from "./style";

export default function Login() {
	const [values, setValue] = useState({
		email: "",
		pass: "",
	});
	const { enqueueSnackbar } = useSnackbar();
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
	  dispatch(changeHeader(false))
	}, [])
	

	const handleLogin = () => {
		if (values.email !== "" && values.pass !== "") {
			Api.post('/login', {
				email: values.email,
				password: values.pass
			})
			.then((res) => {
				const {data} = res
				window.localStorage.setItem("@PetStore/user", JSON.stringify(values))
				window.localStorage.setItem("@PetStore/auth", JSON.stringify(data.accessToken))
				values.name = data.user.name
				dispatch(addUser(values))
				enqueueSnackbar(`Login Realizado! Bem vindo ${data.user.name}`, {
					variant: "success",
				  autoHideDuration: 1500,
				});
				setTimeout(() => {
					dispatch(changeLogin(true));
					history.push("/");
				}, 1500);

			})
			.catch((err) => {
		     enqueueSnackbar(`${err.response.data}`, { variant: "error" })
			})
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
					placeholder="E-mail"
					value={values.email}
					onChange={(event) =>
						setValue({ ...values, email: event.target.value })
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
