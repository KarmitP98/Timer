// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBSbm_AQu9bdUNkz0U5Io8tRrge-DY4Q48",
	authDomain: "timer-820a9.firebaseapp.com",
	databaseURL: "https://timer-820a9-default-rtdb.firebaseio.com",
	projectId: "timer-820a9",
	storageBucket: "timer-820a9.appspot.com",
	messagingSenderId: "226315008612",
	appId: "1:226315008612:web:47df73e3c4c168ba68fd71",
	measurementId: "G-VDZ8MRNZMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = firebase.firestore()
export const auth = firebase.auth()

export default app
