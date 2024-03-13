// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBkkF_kPy5rSeTabhVjr3ffCU43nJxzkBg",
  authDomain: "mern-blog-2c12c.firebaseapp.com",
  projectId: "mern-blog-2c12c",
  storageBucket: "mern-blog-2c12c.appspot.com",
  messagingSenderId: "451717088773",
  appId: "1:451717088773:web:d37f0edda073bb4c667e6c",
  measurementId: "G-WQQ7DDVKTW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
