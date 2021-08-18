import React from "react";
import Contacts from "../../components/Contacts";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import { IconButton, Tooltip } from "@material-ui/core";
import { Link } from "wouter";

export default function Home() {
	return (
		<div>
			<Contacts />
			<Tooltip title="NEW CONTACT" arrow>
				<IconButton
					aria-label="new contact"
					color="primary"
					style={{
						position: "absolute",
						bottom: "20px",
						right: "20px",
					}}
					to="/contact-register"
					component={Link}
				>
					<AddCircleIcon fontSize="large" />
				</IconButton>
			</Tooltip>
		</div>
	);
}
