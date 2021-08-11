import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDusa5ygbxaWVaOfwQATLP3K6viMs_slKM",
  authDomain: "my-website-27904.firebaseapp.com",
  projectId: "my-website-27904",
  storageBucket: "my-website-27904.appspot.com",
  messagingSenderId: "768815865017",
  appId: "1:768815865017:web:5b07edf2f87536af440f68",
  measurementId: "G-DP8XFM39DV"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export { projectFirestore, timestamp }
