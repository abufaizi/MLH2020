// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    apiKey: "AIzaSyAoR7B2k9cQHPsbsbL2cYwUadr64UG83oc",
    authDomain: "mlh2020-6edfb.firebaseapp.com",
    databaseURL: "https://mlh2020-6edfb.firebaseio.com",
    projectId: "mlh2020-6edfb",
    storageBucket: "mlh2020-6edfb.appspot.com",
    messagingSenderId: "858628048466",
    appId: "1:858628048466:web:568f70d3529eae96ea418b"

  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Other config options...
  });

