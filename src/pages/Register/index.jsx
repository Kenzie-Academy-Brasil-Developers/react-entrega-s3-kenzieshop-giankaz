import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeHeader } from "../../store/modules/Login/action";
import { RegisterMain } from "./style";

export default function Register() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        pass: ''
    })
    const dispatch = useDispatch()
    const history = useHistory()
    const { enqueueSnackbar } = useSnackbar();


    useEffect(() => {
        dispatch(changeHeader(1))
    } , [])

    const handleSubmit = () => {
        if (values.name !== '' && values.email !== '' && values.pass !== '') {
            enqueueSnackbar(`Cadastro Realizado! Bem vindo ${values.name}`, {variant: 'success'})
            setTimeout(() => history.push('/login'), 1500)
        } else {
            enqueueSnackbar(`Digite seu nome, email e senha porfavor.`, {variant: 'error'})
        }
    } 
	return (
		<RegisterMain>
			<form onSubmit={(event) => {
                event.preventDefault()
                handleSubmit()
            }}>
				<input type="text" placeholder="Digite seu nome" value={values.name} onChange={(e) => setValues({...values, name: e.target.value})}/>
				<input type="email" placeholder="Digite seu email" value={values.email} onChange={(e) => setValues({...values, email: e.target.value})} />
				<input type="password"  placeholder="Digite sua senha" value={values.pass} onChange={(e) => setValues({...values, pass: e.target.value})}/>
                <button type='submit'>Cadastrar</button>
			</form>
		</RegisterMain>
	);
}
