import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, deleteUser, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { auth } from "../config";
import { createUserInDatabase } from "./createUserInDatabase";

async function createUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    createUserInDatabase(user)
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

async function removeUser(password) {
  const user = auth.currentUser;
  if (!user) {
    console.log("No user is signed in.");
    return;
  }

  if (!password) {
    throw new Error("Password is required for re-authentication.");
  }

  const credential = EmailAuthProvider.credential(user.email, password);

  try {
    // Re-authenticate the user
    await reauthenticateWithCredential(user, credential);
    console.log("User re-authenticated");

    // Now delete the user
    await deleteUser(user);
    console.log("User deleted successfully");
  } catch (error) {
    console.error("Error during account deletion:", error.message);
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

export { createUser, logInUser, logOutUser, removeUser };
