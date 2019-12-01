
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
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DB_URL,
    projectId: process.env.REACT_APP_PROJECT_IS,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_Id,
    appId: process.env.REACT_APP_APP_ID
};
    

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
console.log(process.env);
// Initialize Firebase
firebase.initializeApp(config);

// Finally, export it to use it throughout your app
export default firebase;