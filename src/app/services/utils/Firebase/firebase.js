import * as firebase from "firebase/app";
import "firebase/auth";

// fb config
const fbConfig = {
    apiKey: "AIzaSyBxyjiEaYfB1bcp0r90F0TYkUObJJGuGvU",
    authDomain: "exalted-beanbag-649.firebaseapp.com",
    databaseURL: "https://exalted-beanbag-649.firebaseio.com",
    projectId: "exalted-beanbag-649",
    storageBucket: "exalted-beanbag-649.appspot.com",
    messagingSenderId: "632071944847",
    appId: "1:632071944847:web:9fba0193b57db7616b8efa"
  };
    
// const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
firebase.initializeApp(fbConfig);

export default firebase;