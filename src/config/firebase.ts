import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUrXui2eL2dY2kWu-rXN29RKUf7XfiALE",
  authDomain: "mealstogo-31d65.firebaseapp.com",
  projectId: "mealstogo-31d65",
  storageBucket: "mealstogo-31d65.appspot.com",
  messagingSenderId: "549294961757",
  appId: "1:549294961757:web:3ff2a0de52f648314ec9b4",
};

let firebaseApp: firebase.app.App;
if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
}

export const FirebaseApp = firebaseApp;
export const auth = firebaseApp.auth();
