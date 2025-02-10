import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../config";
import { createUserInFirestore } from "./createUserInFIrestore";

async function createUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    createUserInFirestore(user)
    console.log("User created:", user);
    return user;
  } catch (error) {
    console.error(error.code, error.message);

    if (error.code === "auth/email-already-in-use") {
      console.log("EMAIL ALREADY IN USE");
    } else if (error.code === "auth/invalid-email") {
      console.log("EMAIL INVALID");
    } else if (error.code === "auth/weak-password") {
      console.log("WEAK PASSWORD");
    }

    throw error;
  }
}

async function logInUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("user logged in: ", user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

async function logOutUser() {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Logout failed:", error.message);
    throw error;
  }
}

export { createUser, logInUser, logOutUser };
