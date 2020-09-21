import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const storage = firebase.storage()
// const firestore = firebase.firestore()
const auth = firebase.auth();

export { auth };
