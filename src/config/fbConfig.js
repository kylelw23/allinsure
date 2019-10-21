import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initializa Firebase
const config = {
    apiKey: "AIzaSyA5E3vKaEBz70_wZIfRNke8lpLrjaSKcQE",
    authDomain: "allinsure-b45fc.firebaseapp.com",
    databaseURL: "https://allinsure-b45fc.firebaseio.com",
    projectId: "allinsure-b45fc",
    storageBucket: "allinsure-b45fc.appspot.com",
    messagingSenderId: "1006714275198",
    appId: "1:1006714275198:web:8f790fca37d6c0631d5f2f",
    measurementId: "G-WG4X9PC4J2"
  };
  firebase.initializeApp(config);

  export default firebase;