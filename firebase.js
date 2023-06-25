// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR29_3EBjoAx8kzs-FKQdE9wFtPSrUOeE",
  authDomain: "fir-auth-7679a.firebaseapp.com",
  projectId: "fir-auth-7679a",
  storageBucket: "fir-auth-7679a.appspot.com",
  messagingSenderId: "699807578331",
  appId: "1:699807578331:web:34777939e3cb7a5f0c34fe"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };

