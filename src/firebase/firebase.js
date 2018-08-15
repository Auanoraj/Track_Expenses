import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDiR5KiDTNTOuEY0QppJ47iPTyKt5jWPec",
    authDomain: "xpensify-a51db.firebaseapp.com",
    databaseURL: "https://xpensify-a51db.firebaseio.com",
    projectId: "xpensify-a51db",
    storageBucket: "xpensify-a51db.appspot.com",
    messagingSenderId: "1052915747555"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
