// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth";

// Your app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD5dQg2iNEYdvKOqTK02uWq0qzqNbNOR9U",
    authDomain: "wish-mish-project-17062.firebaseapp.com",
    databaseURL: "https://wish-mish-project-17062.firebaseio.com",
    projectId: "wish-mish-project-17062",
    storageBucket: "wish-mish-project-17062.appspot.com",
    messagingSenderId: "1062794084702",
    appId: "YOUR_FIREBASE_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Finally, export it to use it throughout your app
export default firebase;