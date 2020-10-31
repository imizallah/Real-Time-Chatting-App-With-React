import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbpf7j3gYjGJ9UIRZSoF7pzLb4fkypjvM",
  authDomain: "chatapp-ea381.firebaseapp.com",
  databaseURL: "https://chatapp-ea381.firebaseio.com",
  projectId: "chatapp-ea381",
  storageBucket: "chatapp-ea381.appspot.com",
  messagingSenderId: "341308685800",
  appId: "1:341308685800:web:2916546499cec109a3385d",
  measurementId: "G-74G3X1RJRV"
};

// Initialized firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Connect to firebase database
const db = firebaseApp.firestore();

// Firebase Authentication
const auth = firebase.auth();

// Google Authentication Provider
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }; //Explicit export
export default db; //Implicit export