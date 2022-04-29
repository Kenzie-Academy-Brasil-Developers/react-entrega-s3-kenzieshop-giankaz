import  { useEffect, useState } from 'react'
import {MainStyle} from './styles'
import Product from '../Product'
import {useSnackbar} from 'notistack'

export default function Main() {
  const [error, setError] = useState(false)
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  useEffect(() => {
    if (error) {
      enqueueSnackbar('Item já se encontra no carrinho', {variant: 'error'});
      setError(false)
    }
  }, [error])

  return (
    <>
    <MainStyle >
        <Product setError={setError}/>
    </MainStyle>
    </>
  )
}
