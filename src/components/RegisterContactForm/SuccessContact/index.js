import React, { useContext } from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import ContactsContext from "../../.././context/ContactsContext";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SuccessContact() {
	const { alertState, setAlertState } = useContext(ContactsContext);
	const handleClick = () => {
		setAlertState(false);
	};
	return (
		<div>
			<Snackbar
				open={alertState}
				autoHideDuration={4000}
				onClose={handleClick}
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
			>
				<Alert onClose={handleClick} severity="success">
					Contact registered successfully!
				</Alert>
			</Snackbar>
		</div>
	);
}
