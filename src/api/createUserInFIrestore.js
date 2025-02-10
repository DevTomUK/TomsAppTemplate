import { doc, setDoc } from "firebase/firestore";
import { db } from "../config";

export async function createUserInFirestore(user) {
    try {
        await setDoc(doc(db, "users", user.uid), {
        email: user.email
      });
    }
    catch {

    }
}
