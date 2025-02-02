import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD8dR1f-wICF7P-ognA_EyBOuXAYMswhc8",
  authDomain: "toms-template.firebaseapp.com",
  projectId: "toms-template",
  storageBucket: "toms-template.firebasestorage.app",
  messagingSenderId: "308650149943",
  appId: "1:308650149943:web:e93a64a93d4731254a97b2",
  measurementId: "G-ER3GT108ED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);