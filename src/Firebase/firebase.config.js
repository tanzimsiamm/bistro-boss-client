// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQo0Cinm-d0PwnNhJgF8-gttzrRVSg0Dc",
  authDomain: "boss-bistro-client2.firebaseapp.com",
  projectId: "boss-bistro-client2",
  storageBucket: "boss-bistro-client2.appspot.com",
  messagingSenderId: "868329314384",
  appId: "1:868329314384:web:77a8acc89b7e9f7ced5955",
  measurementId: "G-TVD3Y4MWEN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);