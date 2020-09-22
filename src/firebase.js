import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const storage = firebase.storage()
// const firestore = firebase.firestore()
const auth = firebase.auth();

export { auth };
