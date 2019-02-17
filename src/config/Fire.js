import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBZgI1DfP9GVTwxajGox48qaYNH0aKk7k0",
  authDomain: "nextup-15f4c.firebaseapp.com",
  databaseURL: "https://nextup-15f4c.firebaseio.com",
  projectId: "nextup-15f4c",
  storageBucket: "nextup-15f4c.appspot.com",
  messagingSenderId: "923940393576"
};

const fire = firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(res => {})
    .catch(res => {});
};

export const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(res => console.log(res))
    .catch(res => console.log(res));
};

export default fire;
