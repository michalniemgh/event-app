import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA6Ga3aVy1uhyC0k9IRqvtlGzYEmuRdV-U",
  authDomain: "eventapp-1528492661188.firebaseapp.com",
  databaseURL: "https://eventapp-1528492661188.firebaseio.com",
  projectId: "eventapp-1528492661188",
  storageBucket: "",
  messagingSenderId: "952501125626",
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
