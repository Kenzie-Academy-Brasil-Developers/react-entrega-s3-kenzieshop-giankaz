import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeHeader } from "../../store/modules/Login/action";
import Product from "../Product";
import { MainStyle } from "./styles";

export default function Main() {
	const [error, setError] = useState(false);
	const { enqueueSnackbar } = useSnackbar();
	const dispatch = useDispatch()
	useEffect(() => {
	  dispatch(changeHeader(true))
	}, [])
	

	useEffect(() => {
		if (error) {
			enqueueSnackbar("Item já se encontra no carrinho", {
				variant: "error",
				autoHideDuration: 2000,
			});
			setError(false);
		}
	}, [error]);

	return (
		<>
			<MainStyle>
				<Product setError={setError} />
			</MainStyle>
		</>
	);
}
