import React, { useState, useEffect } from "react";
import ContactsContext from "./ContactsContext";
import { db, auth } from ".././firebaseConfig";
import { useLocation } from "wouter";

export default function ProviderContacts(props) {
	const [allContacts, setAllContacts] = useState(null);
	const [userId, setUserId] = useState("");
	const [load, setLoad] = useState(true);
	const [login, setLogin] = useState(false);
	const [contactName, setContactName] = useState("");
	const [contactPhone, setContactPhone] = useState("");
	const [nameToEdit, setNameToEdit] = useState("");
	const [phoneToEdit, setPhoneToEdit] = useState("");
	const [idContactToEdit, setIdContactToEdit] = useState("");
	const [dialogState, setDialogState] = useState(false);
	const [alertState, setAlertState] = useState(false);
	const [userSignIn, setUserSignIn] = useState(null);
	const [, setLocation] = useLocation();
	const userIsLogged = () => {
		auth.onAuthStateChanged(user => {
			if (user) {
				requestContacts(user.uid);
				setUserId(user.uid);
				setLogin(true);
				setLoad(false);
			} else {
				setLoad(false);
			}
		});
	};
	const requestContacts = async id => {
		try {
			const { docs } = await db
				.collection("users")
				.doc(id)
				.collection("contacts")
				.get();

			const documents = docs.map(document => ({
				id: document.id,
				...document.data(),
			}));
			setAllContacts(documents);
		} catch (e) {
			console.log(e);
		}
	};
	const registerContact = async e => {
		e.preventDefault();
		try {
			await db.collection("users").doc(userId).collection("contacts").add({
				name: contactName,
				phone_number: contactPhone,
			});
		} catch (error) {
			console.log(error);
		}
		setContactName("");
		setContactPhone("");
		setAlertState(true);
		requestContacts(userId);
	};
	const deleteContact = async id => {
		try {
			await db
				.collection("users")
				.doc(userId)
				.collection("contacts")
				.doc(id)
				.delete();
			requestContacts(userId);
		} catch (error) {
			console.log(error);
		}
	};
	const selectForEditContact = contact => {
		setNameToEdit(contact.name);
		setPhoneToEdit(contact.phone_number);
		setIdContactToEdit(contact.id);
	};
	const editContact = async e => {
		e.preventDefault();
		try {
			await db
				.collection("users")
				.doc(userId)
				.collection("contacts")
				.doc(idContactToEdit)
				.set({
					name: nameToEdit,
					phone_number: phoneToEdit,
				});
			requestContacts(userId);
			closeDialog();
		} catch (e) {
			console.log(e);
		}
	};
	const signOutSession = () => {
		auth.signOut();
		setUserSignIn(null);
		setLocation("/login");
		setAllContacts(null);
	};

	const openDialog = () => {
		setDialogState(true);
	};
	const closeDialog = () => {
		setDialogState(false);
	};

	useEffect(() => {
		userIsLogged();
	}, []);

	return (
		<ContactsContext.Provider
			value={{
				allContacts,
				setAllContacts,
				requestContacts,
				deleteContact,
				setUserId,
				userId,
				load,
				login,
				setLogin,
				registerContact,
				contactName,
				setContactName,
				contactPhone,
				setContactPhone,
				editContact,
				nameToEdit,
				phoneToEdit,
				selectForEditContact,
				setNameToEdit,
				setPhoneToEdit,
				dialogState,
				openDialog,
				closeDialog,
				alertState,
				setAlertState,
				userSignIn,
				setUserSignIn,
				signOutSession,
			}}
		>
			{props.children}
		</ContactsContext.Provider>
	);
}
