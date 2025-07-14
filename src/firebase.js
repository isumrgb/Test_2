// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";  // ✅ 추가!
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8sAl60Sbaxev3feb0ZI9Gj7xV4M9nYsQ",
  authDomain: "edubridge-b98b3.firebaseapp.com",
  projectId: "edubridge-b98b3",
  storageBucket: "edubridge-b98b3.firebasestorage.app",
  messagingSenderId: "856336132879",
  appId: "1:856336132879:web:ddaeab251a20b536dd6c7a",
  measurementId: "G-NGNFLM6JKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// ✅ Firestore 초기화
const db = getFirestore(app);
const analytics = getAnalytics(app);


// ✅ Firestore 인스턴스 export
export { db };