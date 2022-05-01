import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Payment from "../pages/Payment";
import Register from "../pages/Register";

export default function Routes() {
	const { login } = useSelector((state) => state);

	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/payment">
					{login ? <Payment /> : <Redirect to="/login" />}
				</Route>
				<Route exact path="/register">
					<Register />
				</Route>
			</Switch>
			<Footer />
		</>
	);
}
