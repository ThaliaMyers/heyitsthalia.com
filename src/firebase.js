import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAOmqX10LGVdfAfo8iMlfh5cHjJ2xeDuzI",
    authDomain: "heyitsthalia-com.firebaseapp.com",
    projectId: "heyitsthalia-com",
    storageBucket: "heyitsthalia-com.firebasestorage.app",
    messagingSenderId: "1051268720260",
    appId: "1:1051268720260:web:de9518ca59bb70a22a04d1",
    measurementId: "G-TNGSGMEBC5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
