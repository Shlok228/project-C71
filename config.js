import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyD0GQywM2wxBkxAdtvCbrSkaKyrEtwB4aM",
    authDomain: "project-c71-ae850.firebaseapp.com",
    projectId: "project-c71-ae850",
    storageBucket: "project-c71-ae850.appspot.com",
    messagingSenderId: "993700997712",
    appId: "1:993700997712:web:330c572be636285e813f55"
  };





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


