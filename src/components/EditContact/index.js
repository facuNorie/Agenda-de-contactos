import React, { useContext } from "react";
import {
	Dialog,
	Card,
	Button,
	CardContent,
	Typography,
	Divider,
	CardActions,
	TextField,
} from "@material-ui/core";
import ContactsContext from "../.././context/ContactsContext";

export default function EditContact() {
	const {
		editContact,
		phoneToEdit,
		nameToEdit,
		setNameToEdit,
		setPhoneToEdit,
		closeDialog,
		dialogState,
	} = useContext(ContactsContext);
	return (
		<Dialog open={dialogState} onClose={closeDialog}>
			<Card>
				<CardContent>
					<Typography variant="h4" align="center">
						Edit contact
					</Typography>
					<Divider />
					<br />
					<CardActions>
						<form
							style={{ display: "flex", flexDirection: "column" }}
							onSubmit={editContact}
						>
							<TextField
								type="text"
								color="primary"
								variant="outlined"
								label="Name"
								required
								value={nameToEdit}
								onChange={e => setNameToEdit(e.target.value)}
							/>
							<br />
							<TextField
								type="number"
								color="primary"
								variant="outlined"
								label="Number"
								required
								value={phoneToEdit}
								onChange={e => setPhoneToEdit(e.target.value)}
							/>
							<br />
							<div style={{ textAlign: "center" }}>
								<Button
									size="large"
									color="primary"
									type="submit"
									variant="contained"
								>
									Edit
								</Button>
							</div>
						</form>
					</CardActions>
				</CardContent>
			</Card>
		</Dialog>
	);
}
