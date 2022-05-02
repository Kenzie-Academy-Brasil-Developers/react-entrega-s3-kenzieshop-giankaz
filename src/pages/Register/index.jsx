import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Api from "../../Api";
import { changeHeader } from "../../store/modules/Login/action";
import { RegisterMain } from "./style";

export default function Register() {
	const [values, setValues] = useState({
		name: "",
		email: "",
		pass: "",
	});
	const dispatch = useDispatch();
	const history = useHistory();
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		dispatch(changeHeader(1));
	}, []);

	const handleSubmit = () => {
		if (values.name !== "" && values.email !== "" && values.pass !== "") {
			Api.post('/users', {
				email: values.email,
				password: values.pass,
				name: values.name,
			})
			.then((res) => {
				console.log(res.data)
				enqueueSnackbar(`Cadastro Realizado! Faça seu login para continuar.`, {
					variant: "success",
					autoHideDuration: 3000,
	
				});
				setTimeout(() => history.push("/login"), 1500);
			}) 
			.catch((err) => {
				enqueueSnackbar(`${err.response.data}`, {
					variant: "error",
			})
			})

		} else {
			enqueueSnackbar(`Digite seu nome, email e senha por favor.`, {
				variant: "error",
		});
	    }
	};
	
	return (
		<RegisterMain>
			<h2>
				Cadastre<span>-se</span>
			</h2>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					handleSubmit();
				}}
			>
				<input
					type="text"
					placeholder="Digite seu nome"
					value={values.name}
					onChange={(e) => setValues({ ...values, name: e.target.value })}
				/>
				<input
					type="email"
					placeholder="Digite seu email"
					value={values.email}
					onChange={(e) => setValues({ ...values, email: e.target.value })}
				/>
				<input
					type="password"
					placeholder="Digite sua senha"
					value={values.pass}
					onChange={(e) => setValues({ ...values, pass: e.target.value })}
				/>
				<button type="submit">Cadastrar</button>
			</form>
		</RegisterMain>
	);
}
