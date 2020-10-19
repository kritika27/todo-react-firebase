import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBuzRWSMvKOqL0WIf9JafsDoHlPmKRH7w0",
  authDomain: "todo-e77e9.firebaseapp.com",
  databaseURL: "https://todo-e77e9.firebaseio.com",
  projectId: "todo-e77e9",
  storageBucket: "todo-e77e9.appspot.com",
  messagingSenderId: "507731089556",
  appId: "1:507731089556:web:396b4d56690e5c74e6fc81",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
