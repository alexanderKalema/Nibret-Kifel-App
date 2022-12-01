// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDQiBnQMI-IIOmQmCAhtZFVYVniTd0Qcag',
  authDomain: 'nibret-app.firebaseapp.com',
  projectId: 'nibret-app',
  storageBucket: 'nibret-app.appspot.com',
  messagingSenderId: '897652873178',
  appId: '1:897652873178:web:f6eb91c6364ae61f5e52e3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);