import React, { useContext } from "react";
import ContactsContext from "../.././context/ContactsContext";
import { TextField, Button, Paper } from "@material-ui/core";
import SuccessContact from "./SuccessContact";

export default function RegisterContactForm() {
	const {
		registerContact,
		contactName,
		setContactName,
		contactPhone,
		setContactPhone,
	} = useContext(ContactsContext);

	return (
		<div>
			<Paper
				style={{
					width: "80%",
					margin: "100px auto",
					textAlign: "center",
					padding: "20px",
				}}
			>
				<form
					onSubmit={registerContact}
					style={{
						display: "flex",
						flexDirection: "column",
						marginBottom: "10px",
					}}
				>
					<TextField
						type="text"
						variant="filled"
						label="Name"
						required
						value={contactName}
						onChange={e => {
							setContactName(e.target.value);
						}}
					/>
					<br />
					<TextField
						type="number"
						variant="filled"
						label="Phone Number"
						required
						value={contactPhone}
						onChange={e => {
							setContactPhone(e.target.value);
						}}
					/>
					<br />
					<div>
						<Button type="submit" style={{ border: "1px solid #aaa" }}>
							Register
						</Button>
					</div>
				</form>
			</Paper>
			<SuccessContact />
		</div>
	);
}
