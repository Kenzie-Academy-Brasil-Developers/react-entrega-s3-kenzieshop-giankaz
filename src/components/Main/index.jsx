import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import Product from "../Product";
import { MainStyle } from "./styles";

export default function Main() {
	const [error, setError] = useState(false);
	const { enqueueSnackbar } = useSnackbar();

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
