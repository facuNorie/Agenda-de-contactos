import React, { useContext } from "react";
import ContactsContext from "../.././context/ContactsContext";
import { List, makeStyles } from "@material-ui/core";
import SingleContact from "../SingleContact";
import EditContact from "../EditContact";

const useStyles = makeStyles(theme => ({
	offsets: {
		height: `calc(90vh - ${theme.mixins.toolbar.minHeight}px)`,
		overflowY: "auto",
	},
}));

export default function Contacts() {
	const { allContacts } = useContext(ContactsContext);
	const classes = useStyles();

	return (
		<div className={classes.offsets}>
			{allContacts?.length !== 0 ? (
				<List>
					{allContacts?.map(contact => {
						return <SingleContact contact={contact} key={contact.id} />;
					})}
				</List>
			) : (
				<h5>You dont have contacts</h5>
			)}
			<EditContact />
		</div>
	);
}
