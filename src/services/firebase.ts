import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyDb7KqLugZ597jY8SL1kPkp9ctutbauvbg",
  authDomain: "pecas-canaa-fc9c5.firebaseapp.com",
  projectId: "pecas-canaa-fc9c5",
  storageBucket: "pecas-canaa-fc9c5.appspot.com",
  messagingSenderId: "323906508356",
  appId: "1:323906508356:web:3814e05f1be7a952930e11"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
