import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB1bBpj63Rdv_yopFMFM6WYP63Vd-wZJGg",
    authDomain: "linkedin-clone-125ac.firebaseapp.com",
    projectId: "linkedin-clone-125ac",
    storageBucket: "linkedin-clone-125ac.appspot.com",
    messagingSenderId: "609807902590",
    appId: "1:609807902590:web:0be077a0b28475bb08b52f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
  export default firebase;