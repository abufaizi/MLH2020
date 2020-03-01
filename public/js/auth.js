// listen for auth status changes
let userSignedIn = false;

auth.onAuthStateChanged(user => {
  if (user) {
    userSignedIn = true;
    console.log(user);
  } else {
    userSignedIn = false;
    console.log('user is signed out');
  }
});

// signup
const signunForm = document.querySelector('#signup-form');

signunForm.addEventListener('submit', e => {
  e.preventDefault();

  // get user info
  const email = signunForm['signup-email'].value;
  const password = signunForm['signup-password'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password);
});

// logout
const logout = document.querySelector('#logout-button');
logout.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut();
});

// login
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', e => {
  e.preventDefault();

  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  auth.signInWithEmailAndPassword(email, password);
});
