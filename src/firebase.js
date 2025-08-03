// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBVv1BmBY13Ra8BEBytMaZd1DDpUVwviTM",
  authDomain: "frndsdiary-6af67.firebaseapp.com",
  projectId: "frndsdiary-6af67",
  storageBucket: "frndsdiary-6af67.firebasestorage.app",
  messagingSenderId: "544430691403",
  appId: "1:544430691403:web:cce091f6a13508c97969ce"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
