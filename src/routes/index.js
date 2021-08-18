import React, { useContext } from "react";
import { Route, Redirect, Switch } from "wouter";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import ContactRegister from "../pages/ContactRegister";
import ContactsContext from "../context/ContactsContext";
import NotFound from ".././pages/NotFound";
import CircularProgress from "@material-ui/core/CircularProgress";
export default function Routes() {
	const { load, login } = useContext(ContactsContext);
	return (
		<>
			<Navbar />

			<Switch>
				<Route exact path="/">
					{load ? (
						<div
							style={{
								width: "100%",
								height: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<CircularProgress />
						</div>
					) : login ? (
						<Home />
					) : (
						<Redirect to="/login" />
					)}
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/contact-register">
					<ContactRegister />
				</Route>
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</>
	);
}
