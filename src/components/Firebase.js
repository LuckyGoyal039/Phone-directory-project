import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB9YypfpySTH-x-ydB8w4bPyV4_3Rrd2TM",
  authDomain: "phone-directory-dc4c4.firebaseapp.com",
  projectId: "phone-directory-dc4c4",
  storageBucket: "phone-directory-dc4c4.appspot.com",
  messagingSenderId: "956533451682",
  appId: "1:956533451682:web:8d6adef2d8fe8d7668a0fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
export const auth=getAuth(app);
export default app;