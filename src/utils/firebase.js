// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs4VlGwmPttGpSLU2bxmifTSNSO7TAEOI",
  authDomain: "firecontactneu.firebaseapp.com",
  databaseURL: "https://firecontactneu-default-rtdb.firebaseio.com",
  projectId: "firecontactneu",
  storageBucket: "firecontactneu.appspot.com",
  messagingSenderId: "985219499254",
  appId: "1:985219499254:web:9938dd7688e8e9cc0dd8d7",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
