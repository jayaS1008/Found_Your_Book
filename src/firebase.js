import * as firebase from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCG6QMxartPZSEKMhzM0X74zHPDKksDYnw",
    authDomain: "ecommerce-82a24.firebaseapp.com",
    projectId: "ecommerce-82a24",
    storageBucket: "ecommerce-82a24.appspot.com",
    messagingSenderId: "24325638726",
    appId: "1:24325638726:web:51a4574d700d29241d5847",
    measurementId: "G-2MHK4837J7"
  };
//initialise firebase
  firebase.initializeApp(firebaseConfig);

///export
  export const auth= firebase.auth();
  export const google = new firebase.auth.GoogleAuthProvider();