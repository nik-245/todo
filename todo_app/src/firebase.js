import firebase from "firebase";

// const firebaseConfig = {
    
//   };

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD7uAJPvayZaPK52iNDIM5_xYvLwzE81fs",
    authDomain: "todo-app-917cc.firebaseapp.com",
    projectId: "todo-app-917cc",
    storageBucket: "todo-app-917cc.appspot.com",
    messagingSenderId: "580782240288",
    appId: "1:580782240288:web:6588e42c24c25e43f40245"
});

const db = firebaseApp.firestore();

export default db;