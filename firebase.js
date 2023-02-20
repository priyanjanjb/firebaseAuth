// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAsYrj6I794FsKrGPLKlurZdJRrGHtWtiY",
  authDomain: "test-4be7d.firebaseapp.com",
  projectId: "test-4be7d",
  storageBucket: "test-4be7d.appspot.com",
  messagingSenderId: "779153108936",
  appId: "1:779153108936:web:49d57592a53397f4d41afd",
  measurementId: "G-7G1B5WFT1C"
};
// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };