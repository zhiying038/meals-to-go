import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUrXui2eL2dY2kWu-rXN29RKUf7XfiALE",
  authDomain: "mealstogo-31d65.firebaseapp.com",
  projectId: "mealstogo-31d65",
  storageBucket: "mealstogo-31d65.appspot.com",
  messagingSenderId: "549294961757",
  appId: "1:549294961757:web:3ff2a0de52f648314ec9b4",
};

let firebaseApp: firebase.default.app.App;
if (!firebase.default.apps.length) {
  firebaseApp = firebase.default.initializeApp(firebaseConfig);
}

export const FirebaseApp = firebaseApp;
