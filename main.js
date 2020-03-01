// Initialize Firebase
let config = {
  apiKey: 'AIzaSyAoR7B2k9cQHPsbsbL2cYwUadr64UG83oc',
  authDomain: 'mlh2020-6edfb.firebaseapp.com',
  databaseURL: 'https://mlh2020-6edfb.firebaseio.com',
  projectId: 'mlh2020-6edfb',
};

firebase.initializeApp(config);

// save auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();
