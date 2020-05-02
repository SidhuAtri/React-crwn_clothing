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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
