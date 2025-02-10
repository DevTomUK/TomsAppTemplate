import { doc, setDoc } from "firebase/firestore";
import { db } from "../config";

export async function createUserInDatabase(user) {
    try {
        await setDoc(doc(db, "users", user.uid), {
        email: user.email
      });
    }
    catch(error) {
      console.log(error)
    }
}
