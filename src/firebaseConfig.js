import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDyJLak90zIwsbqqpOLoH4Z3-hclu-L_Ms",
	authDomain: "my-first-proyect-c16e4.firebaseapp.com",
	projectId: "my-first-proyect-c16e4",
	storageBucket: "my-first-proyect-c16e4.appspot.com",
	messagingSenderId: "780141302865",
	appId: "1:780141302865:web:1c53e06190adb181b8d470",
	measurementId: "G-JJTLNZBYQY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
