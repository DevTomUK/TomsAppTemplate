import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8dR1f-wICF7P-ognA_EyBOuXAYMswhc8",
  authDomain: "toms-template.firebaseapp.com",
  projectId: "toms-template",
  storageBucket: "toms-template.firebasestorage.app",
  messagingSenderId: "308650149943",
  appId: "1:308650149943:web:e93a64a93d4731254a97b2",
  measurementId: "G-ER3GT108ED"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
const db = getFirestore(app)

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistence set to LOCAL");
  })
  .catch((error) => {
    console.error("Failed to set persistence:", error);
  });

export { app, auth, analytics, db }