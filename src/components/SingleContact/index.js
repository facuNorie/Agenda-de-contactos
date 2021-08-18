import React, { useContext } from "react";
import ContactsContext from "../.././context/ContactsContext";
import {
	ListItem,
	ListItemText,
	IconButton,
	Avatar,
	ListItemAvatar,
	Divider,
	Tooltip,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export default function SingleContact({ contact }) {
	const { selectForEditContact, openDialog, deleteContact } =
		useContext(ContactsContext);
	const firstLetter = contact.name.charAt(0);
	return (
		<>
			<ListItem>
				<ListItemAvatar>
					<Avatar>{firstLetter.toUpperCase()}</Avatar>
				</ListItemAvatar>
				<ListItemText>
					<span>{contact.name}</span>
					<br />
					<span>{contact.phone_number}</span>
				</ListItemText>
				<Tooltip title="Edit" placement="top" arrow>
					<IconButton
						color="primary"
						aria-label="edit"
						onClick={() => {
							selectForEditContact(contact);
							openDialog();
						}}
					>
						<EditIcon />
					</IconButton>
				</Tooltip>
				<Tooltip title="Delete" placement="top" arrow>
					<IconButton
						color="secondary"
						aria-label="delete"
						onClick={() => {
							if (
								window.confirm("Are you sure you want to delete the contact?")
							)
								deleteContact(contact.id);
							else return;
						}}
					>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			</ListItem>
			<Divider />
		</>
	);
}
