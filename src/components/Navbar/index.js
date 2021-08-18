import React, { useEffect, useContext } from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "wouter";
import { auth } from "../../firebaseConfig";
import ContactsContext from "../.././context/ContactsContext";

export default function Navbar() {
	const { signOutSession, setUserSignIn, userSignIn } =
		useContext(ContactsContext);

	useEffect(() => {
		auth.onAuthStateChanged(user => {
			if (user) {
				setUserSignIn(user.email);
			}
		});
	}, [setUserSignIn]);

	return (
		<AppBar position="static">
			<Toolbar>
				{userSignIn ? (
					<Button
						variant="contained"
						component={Link}
						href="/"
						style={{ marginRight: "10px" }}
					>
						Home
					</Button>
				) : (
					<span></span>
				)}
				{userSignIn ? (
					<Button
						variant="contained"
						component={Link}
						href="/contact-register"
						style={{ marginRight: "10px" }}
					>
						New Contact
					</Button>
				) : (
					<span></span>
				)}

				{!userSignIn ? (
					<Button variant="contained" component={Link} href="/login">
						Login
					</Button>
				) : (
					<span></span>
				)}

				<span style={{ flexGrow: "1" }}></span>
				{userSignIn ? (
					<Button
						variant="contained"
						color="secondary"
						onClick={signOutSession}
					>
						Sign out
					</Button>
				) : (
					<span></span>
				)}
			</Toolbar>
		</AppBar>
	);
}
