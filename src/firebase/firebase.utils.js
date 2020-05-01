import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBNf4qhH8DBosbbYPhcnRd3JfrsrU_xWzA",
  authDomain: "crwn-clothing-d.firebaseapp.com",
  databaseURL: "https://crwn-clothing-d.firebaseio.com",
  projectId: "crwn-clothing-d",
  storageBucket: "crwn-clothing-d.appspot.com",
  messagingSenderId: "256615231155",
  appId: "1:256615231155:web:4a05f884e8ce0d40578ac6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
