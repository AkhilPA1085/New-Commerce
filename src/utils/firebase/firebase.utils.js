import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getFirestore,doc, getDoc,setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCU5Y4kluXxcwqnvoK70LGYIzhtPRmtUBU",
  authDomain: "new-e-commerce-e419c.firebaseapp.com",
  projectId: "new-e-commerce-e419c",
  storageBucket: "new-e-commerce-e419c.appspot.com",
  messagingSenderId: "95160761272",
  appId: "1:95160761272:web:ef23323692d96de699ed4d",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  promt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore()
export const createUserDocumentFromAuth = async(userAuth)=>{
  const userDocRef = doc(db,'users',userAuth.uid)

  console.log(userDocRef)

  const userSnapshot =await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()){
    const {displayName,email} = userAuth
    const createdAt = new Date()

    try{
      await setDoc(userDocRef,{displayName,email,createdAt})
    }catch(error){
      console.log(error,'user creation failed')
    }
  }

  return userDocRef; 
}
