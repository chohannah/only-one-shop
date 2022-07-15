import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  // console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("eror creating the user", error.message);
    }
  }

  return userDocRef;
};
