import { useSnackbar } from 'notistack';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addUser } from '../../store/modules/User/action';
import { LoginMain } from './style'

export default function Login() {
    const [values, setValue] = useState({
        name: '',
        pass: '',
    })
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const history = useHistory()
    const dispatch = useDispatch()

 

    const handleLogin = () => {
        if (values.name !== '' && values.pass !== '') {
            window.localStorage.setItem('@PetStore/user', JSON.stringify(values))
            dispatch(addUser(values))
            enqueueSnackbar('Login Realizado!', {variant: 'success'});
            setTimeout(() => history.push('/'),1500)
        } else {
            enqueueSnackbar('Digite seu usuário e senha!', {variant: 'error'});
        }
    }
  return (
    <LoginMain>
         <form onSubmit={(event) => {
             event.preventDefault()
             handleLogin()

         }}>
             <input type="text"placeholder='Nome de usuário' value={values.name} onChange={(event) => setValue({...values, name: event.target.value})}/>
             <input type="password" name="" id="" placeholder='Senha'  value={values.pass} onChange={(event) => setValue({...values, pass: event.target.value})}/>
             <button type='submit'>Entrar</button>
         </form>
    </LoginMain>
  )
}
