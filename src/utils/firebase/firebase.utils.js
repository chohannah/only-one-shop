import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyChHfOQR5rXG7Cr0YpIMSdj_dNZ7Y-iak4",
  authDomain: "o-p-e-n-s.firebaseapp.com",
  projectId: "o-p-e-n-s",
  storageBucket: "o-p-e-n-s.appspot.com",
  messagingSenderId: "903219034219",
  appId: "1:903219034219:web:2a2124de48fdcfafbc992e",
  measurementId: "G-D2K7VHJSLR",
};

// Initialize Firebase
const firbaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
