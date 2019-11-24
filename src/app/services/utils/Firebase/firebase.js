// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";
// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth";

// Your app's Firebase configuration
// need to go ahead with produuction mode 
var prodConfig = {}

var devConfig = {
    apiKey: "AIzaSyD5dQg2iNEYdvKOqTK02uWq0qzqNbNOR9U",
    authDomain: "wish-mish-project-17062.firebaseapp.com",
    databaseURL: "https://wish-mish-project-17062.firebaseio.com",
    projectId: "wish-mish-project-17062",
    storageBucket: "wish-mish-project-17062.appspot.com",
    messagingSenderId: "1062794084702"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
// Initialize Firebase
firebase.initializeApp(config);


// Finally, export it to use it throughout your app
export default firebase;