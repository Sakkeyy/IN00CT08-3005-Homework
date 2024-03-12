import { getFirestore,collection,addDoc,serverTimestamp } from "firebase/firestore"
import { initializeApp } from "firebase/app";


//Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBU-quTLTV12NY8_fTXC4pGXhizW5COkzM",
  authDomain: "reacttesting-2359c.firebaseapp.com",
  projectId: "reacttesting-2359c",
  storageBucket: "reacttesting-2359c.appspot.com",
  messagingSenderId: "324469671896",
  appId: "1:324469671896:web:2cf642fbf4b67c00ead4ad"
};

initializeApp(firebaseConfig);

const firestore = getFirestore()

const MESSAGES = 'messages'

export{
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    MESSAGES
}