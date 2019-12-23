import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// fb config
const fbConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
    
// const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
firebase.initializeApp(fbConfig);

export default firebase;