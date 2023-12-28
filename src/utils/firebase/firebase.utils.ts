import { initializeApp } from 'firebase/app'

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  User,
  UserCredential,
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
  orderBy,
} from 'firebase/firestore'

import { Category } from '../../store/categories/category.types'
// import PRODUCTS_DATA from '../../products-data'
// import { log } from 'console'

const firebaseConfig = {
  apiKey: 'AIzaSyB7hFTOAg7EV6sS9IeNPlM_DneSclAFjkY',
  authDomain: 'only-one-shop-db.firebaseapp.com',
  projectId: 'only-one-shop-db',
  storageBucket: 'only-one-shop-db.appspot.com',
  messagingSenderId: '335602963766',
  appId: '1:335602963766:web:1fd2f723b68c808e820f97',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const firestore = getFirestore(app)
// const analytics = getAnalytics(app)
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export type ObjectToAdd = {
  title: string
}

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('done')
}

//set data to Firestore
// PRODUCTS_DATA.forEach(async (dataToUpload) => {
//   try {
//     const categoryDocRef = doc(firestore, 'categories', dataToUpload.title)
//     await setDoc(categoryDocRef, dataToUpload)
//     console.log('Document added successfully with ID: ', dataToUpload.title)
//   } catch (error) {
//     console.error('Error adding document: ', error)
//   }

//   // order products data
//   const categoriesQuery = query(
//     collection(firestore, 'categories'),
//     orderBy('order', 'asc')
//   )
//   const querySnapshot = await getDocs(categoriesQuery)
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, ' => ', doc.data())
//   })
// })

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  // await Promise.reject(new Error('error simulating'))
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Category)
}

export type AdditionalInformation = {
  displayName?: string
}

export type UserData = {
  createdAt: Date
  displayName: string
  email: string
}

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)
  // console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef)
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log('eror creating the user', error)
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>
}

export const createAuthWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential | void> => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential | void> => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback)

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe()
        resolve(userAuth)
      },
      reject
    )
  })
}
