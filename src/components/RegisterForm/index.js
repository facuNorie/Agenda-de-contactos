import React, { useState, useContext } from "react";
import { Button, TextField, Chip } from "@material-ui/core";
import { auth } from "../../firebaseConfig";
import { useLocation } from "wouter";
import ContactsContext from "../../context/ContactsContext";

export default function RegisterForm() {
	const { setLogin } = useContext(ContactsContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [msgError, setMsgError] = useState(null);
	const [, setLocation] = useLocation();

	const registerUser = async () => {
		await auth
			.createUserWithEmailAndPassword(email, password)
			.then(res => {
				setLogin(true);
				setLocation("/");
			})
			.catch(error => {
				if (error.code === "auth/weak-password") {
					setMsgError(error.message);
				}
			});
	};
	const loginUser = async e => {
		e.preventDefault();
		await auth
			.signInWithEmailAndPassword(email, password)
			.then(res => {
				setLogin(true);
				setLocation("/");
			})
			.catch(error => {
				if (error.code === "auth/wrong-password") {
					setMsgError(error.message);
				}
				if (error.code === "auth/user-not-found") {
					setMsgError("User not found");
				}
			});
	};

	return (
		<div>
			<div style={{ width: "80%", margin: "100px auto", textAlign: "center" }}>
				<form
					style={{
						display: "flex",
						flexDirection: "column",
						marginBottom: "10px",
					}}
					onSubmit={loginUser}
				>
					<TextField
						label="Email"
						type="email"
						variant="outlined"
						required
						onChange={e => {
							setEmail(e.target.value);
						}}
					/>
					<br />
					<TextField
						label="Password"
						type="password"
						variant="outlined"
						required
						onChange={e => {
							setPassword(e.target.value);
						}}
					/>
					<br />
					<Button
						color="primary"
						variant="outlined"
						type="submit"
						style={{ marginBottom: "10px" }}
					>
						Login
					</Button>
				</form>
				<Button
					color="primary"
					variant="contained"
					fullWidth
					onClick={registerUser}
				>
					Register
				</Button>
			</div>
			{msgError !== null ? (
				<div style={{ textAlign: "center" }}>
					<Chip label={msgError} color="secondary" />
				</div>
			) : (
				<span></span>
			)}
		</div>
	);
}
