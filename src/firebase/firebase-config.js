import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBsw5nW54AXTiaCLXzRwAd4XueiEYSoiPA",
  authDomain: "react-app-journal-53a81.firebaseapp.com",
  projectId: "react-app-journal-53a81",
  storageBucket: "react-app-journal-53a81.appspot.com",
  messagingSenderId: "564786692227",
  appId: "1:564786692227:web:5bb56a2c9872ff2b1fdbb6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}